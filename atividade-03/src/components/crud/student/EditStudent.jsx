import { useState, useEffect, React } from 'react';
import { students } from './data';
import { useParams } from 'react-router-dom';

function EditStudent() {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [ira, setIra] = useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const student = [{ name: name, course: course, ira: ira }];
        console.log(student[params.id]);
        alert(`Nome: ${name} \nCurso: ${course}\nIRA: ${ira}`);
    };

    const params = useParams();

    useEffect(() => {
        const student = students[params.id];
        setName(student.name);
        setCourse(student.course);
        setIra(student.ira);
    }, [params.id]);

    return (
        <div>
            <h2>Editar Estudante</h2>
            <h2>Nome: {name}</h2>
            <h2>Curso: {course}</h2>
            <h2>IRA: {ira}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Nome</label>
                    <input
                        type="text"
                        value={name === null || name === undefined ? '' : name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Curso</label>
                    <input
                        type="text"
                        name="course"
                        value={course ?? ''}
                        onChange={(e) => setCourse(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">IRA</label>
                    <input
                        type="number"
                        name="ira"
                        value={ira ?? 0}
                        onChange={(e) => setIra(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group" style={{ paddingTop: 10 }}>
                    <input
                        type="submit"
                        value="Editar Estudante"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default EditStudent;
