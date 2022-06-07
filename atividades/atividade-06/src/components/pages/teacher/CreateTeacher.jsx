import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../../../utils/FirebaseContext';
import TeacherService from '../../../services/TeacherService';

const CreateTeacherPage = () => {
    return (
        <>
            <FirebaseContext.Consumer>
                {(firebase) => <CreateTeacher firebase={firebase} />}
            </FirebaseContext.Consumer>
        </>
    );
};

const CreateTeacher = ({ firebase }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState();
    const [university, setUniversity] = useState('');
    const [degree, setDegree] = useState('');
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
        const newTeacher = {
            name: name,
            salary: salary,
            university: university,
            degree: degree,
        };
        TeacherService.create(
            firebase.getFirestoreDb(),
            (_id) => {
                console.log(`Cadastro de professor de id ${_id} bem sucedido!`);
                navigate('/teachers', {
                    message: `Cadastrado bem sucedido!`,
                });
            },
            newTeacher
        );

        /*
        
        */
    }

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
                        placeholder="Digite qual é a área de formação do professor"
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
                        value="Criar Professor"
                        className="btn btn-light"
                    />
                </div>
            </form>
        </div>
    );
};
export default CreateTeacherPage;
