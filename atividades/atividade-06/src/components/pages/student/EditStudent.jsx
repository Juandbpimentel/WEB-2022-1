import { useState, React, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FirebaseContext from '../../../utils/FirebaseContext';
import StudentService from '../../../services/StudentService';

const EditStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            {(firebase) => <EditStudent firebase={firebase} />}
        </FirebaseContext.Consumer>
    );
};

function EditStudent({ firebase }) {
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
        StudentService.update(
            firebase.getFirestoreDb(),
            (_id) => {
                console.log(`Estudante ${_id} foi atualizado com sucesso!`);
                navigate('/students', {
                    message: `Edição bem sucedida!`,
                });
            },
            params._id,
            updatedStudent
        );
        /*
         */
    };

    useEffect(() => {
        StudentService.retrieve_promisse(
            firebase.getFirestoreDb(),
            (student) => {
                setName(student.name);
                setCourse(student.course);
                setIra(student.ira);
            },
            params._id
        );
    }, [params._id, firebase]);

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

export default EditStudentPage;
