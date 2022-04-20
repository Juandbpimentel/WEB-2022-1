import React from 'react';
import { useState } from 'react';

const CreateStudent = () => {
    const [name, setName] = useState('');
    const [ira, setIra] = useState(0);
    const [course, setCourse] = useState('');

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeIra(evt) {
        setIra(evt.target.value);
    }

    function handleChangeCourse(evt) {
        setCourse(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ student: { name: name, ira: ira, course: course } });
        axios
    }

    return (
        <div>
            <h2>Criar Estudante</h2>
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
                    <label htmlFor="">IRA</label>
                    <input
                        type="number"
                        value={ira ?? 0}
                        placeholder="Digite o valor do seu IRA"
                        name="ira"
                        onChange={handleChangeIra}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Curso</label>
                    <input
                        type="text"
                        value={course ?? ''}
                        placeholder="Digite o nome do seu curso"
                        name="course"
                        onChange={handleChangeCourse}
                        className="form-control"
                    />
                </div>
                <div
                    className="form-group"
                    style={{ paddingTop: 20, paddingBottom: 20 }}
                >
                    <input
                        type="submit"
                        value="Criar Estudante"
                        className="btn btn-light"
                    />
                </div>
            </form>
        </div>
    );
};
export default CreateStudent;
