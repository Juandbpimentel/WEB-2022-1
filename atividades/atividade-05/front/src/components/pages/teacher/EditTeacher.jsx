import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CreateTeacher = () => {
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
        const updateTeacher = {
            name,
            salary,
            university,
            degree,
        };
        axios
            .patch(
                `http://localhost:3002/crud/teachers/update/${params._id}`,
                updateTeacher
            )
            .then((resp) => {
                console.log(
                    navigate('/teachers', {
                        message: `Professor editado com sucesso!`,
                    })
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        axios
            .get(`http://localhost:3002/crud/teachers/retrieve/${params._id}`)
            .then((resp) => {
                setUniversity(resp.data.university);
                setSalary(resp.data.salary);
                setName(resp.data.name);
                setDegree(resp.data.degree);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [params._id]);

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
                    <label htmlFor="">Sal??rio</label>
                    <input
                        type="number"
                        value={salary ?? 0}
                        placeholder="Digite o sal??rio recebido pelo professor"
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
                        placeholder="Digite qual foi ?? a faculdade de forma????o do professor"
                        name="university"
                        onChange={handleChangeuniversity}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">??rea de forma????o</label>
                    <input
                        type="text"
                        value={degree ?? ''}
                        placeholder="Digite qual ?? sua ??rea de forma????o"
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
export default CreateTeacher;
