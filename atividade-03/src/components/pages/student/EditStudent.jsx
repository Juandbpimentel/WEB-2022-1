import { useState, React, useEffect } from 'react';
import students from './data';
import { useParams } from 'react-router-dom';

function EditStudent() {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [ira, setIra] = useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log({ student: { name: name, ira: ira, course: course } });
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
            <form action="" onSubmit={handleSubmit}>
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
                <div
                    className="form-group"
                    style={{ paddingTop: 20, paddingBottom: 20 }}
                >
                    <input
                        type="submit"
                        value="Editar Estudante"
                        className="btn btn-light"
                    />
                </div>
            </form>
        </div>
    );
}

export default EditStudent;
