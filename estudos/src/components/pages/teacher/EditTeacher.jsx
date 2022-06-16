import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TeacherService from '../../../services/TeacherService';
import FirebaseContext from '../../../utils/FirebaseContext';
import RestrictPage from '../RestrictPage';

const EditTeacherPage = () => {
    return (
        <FirebaseContext.Consumer>
            {(context) => {
                return (
                    <RestrictPage isLogged={context.getUser() != null}>
                        <EditTeacher firebase={context} />
                    </RestrictPage>
                );
            }}
        </FirebaseContext.Consumer>
    );
};

const EditTeacher = ({ firebase }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState(0);
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeSalary(evt) {
        setSalary(evt.target.value);
    }

    function handleChangeuniversity(evt) {
        setUniversity(evt.target.value);
    }

    function handleChangedegree(evt) {
        setDegree(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const updatedTeacher = {
            name,
            salary,
            university,
            degree,
        };
        TeacherService.update(
            firebase.getFirestoreDb(),
            (_id) => {
                console.log(`Professor de id ${_id} editado com sucesso!`);
                navigate('/teachers', {
                    message: `Professor editado com sucesso!`,
                });
            },
            params._id,
            updatedTeacher
        );
    }

    useEffect(() => {
        TeacherService.retrieve(
            firebase.getFirestoreDb(),
            (teacher) => {
                setUniversity(teacher.university);
                setSalary(teacher.salary);
                setName(teacher.name);
                setDegree(teacher.degree);
            },
            params._id
        );
    }, [firebase, params._id]);

    return (
        <div>
            <h2>Criar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Nome</label>
                    <input
                        type="text"
                        value={name === null || name === undefined ? '' : name}
                        placeholder="Digite seu nome"
                        name="name"
                        onChange={handleChangeName}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Salário</label>
                    <input
                        type="number"
                        value={salary ?? 0}
                        placeholder="Digite o salário recebido pelo professor"
                        name="salary"
                        onChange={handleChangeSalary}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Universidade</label>
                    <input
                        type="text"
                        value={university ?? ''}
                        placeholder="Digite qual foi é a faculdade de formação do professor"
                        name="university"
                        onChange={handleChangeuniversity}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Área de formação</label>
                    <input
                        type="text"
                        value={degree ?? ''}
                        placeholder="Digite qual é sua área de formação"
                        name="degree"
                        onChange={handleChangedegree}
                        className="form-control"
                    />
                </div>
                <div
                    className="form-group"
                    style={{ paddingTop: 20, paddingBottom: 20 }}
                >
                    <input
                        type="submit"
                        value="Editar Professor"
                        className="btn btn-light"
                    />
                </div>
            </form>
        </div>
    );
};
export default EditTeacherPage;
