import { useState, React, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent(props) {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [ira, setIra] = useState(0);
    const params = useParams();

    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const updatedStudent = {
            name,
            course,
            ira,
        };
        axios
            .patch(
                `http://localhost:3002/crud/students/update/${params._id}`,
                updatedStudent
            )
            .then((resp) => {
                navigate('/students', {
                    message: `Estudante editado com sucesso!`,
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        axios
            .get(`http://localhost:3002/crud/students/retrieve/${params._id}`)
            .then((resp) => {
                setName(resp.data.name);
                setCourse(resp.data.course);
                setIra(resp.data.ira);
            })
            .catch((err) => console.log(err));
        //console.log({ name, ira, course });
    }, [params._id]);

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
