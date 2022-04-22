import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CreateTeacher = () => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState(0);
    const [admissionDate, setAdmissionDate] = useState('');
    const [teachingArea, setTeachingArea] = useState('');
    const params = useParams();

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeSalary(evt) {
        setSalary(evt.target.value);
    }

    function handleChangeAdmissionDate(evt) {
        setAdmissionDate(evt.target.value);
    }

    function handleChangeTeachingArea(evt) {
        setTeachingArea(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const updateTeacher = {
            name,
            salary,
            admissionDate,
            teachingArea,
        };
        axios
            .patch(`http://localhost:3002/teachers/${params.id}`, updateTeacher)
            .then((resp) => {
                console.log(
                    `O professor de id:${resp.data.id} foi editado com sucesso!`
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        axios
            .get(`http://localhost:3002/teachers/${params.id}`)
            .then((resp) => {
                setAdmissionDate(resp.data.admissionDate);
                setSalary(resp.data.salary);
                setName(resp.data.name);
                setTeachingArea(resp.data.teachingArea);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [params.id]);

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
                    <label htmlFor="">Data de Admissão</label>
                    <input
                        type="date"
                        value={admissionDate ?? ''}
                        placeholder="Digite qual foi sua data de adimissão"
                        name="admissionDate"
                        onChange={handleChangeAdmissionDate}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Área de Ensino</label>
                    <input
                        type="text"
                        value={teachingArea ?? ''}
                        placeholder="Digite qual é sua área de ensino"
                        name="teachingArea"
                        onChange={handleChangeTeachingArea}
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
