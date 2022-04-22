import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function StudentTableRow({
    student: { id, name, course, ira },
    deleteStudentById,
}) {
    function deleteStudent() {
        axios
            .delete(`http://localhost:3002/students/${id}`)
            .then(() => {
                console.log(
                    `Registro do aluno de id:${id} foi apagado com sucessso!`
                );
                deleteStudentById(id);
            })
            .catch((err) => console.log(err));
        deleteStudentById(id);
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{course}</td>
            <td>{ira}</td>
            <td>
                <Link to={`/editStudent/${id}`} className="btn btn-warning">
                    Editar
                </Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={deleteStudent}>
                    Apagar
                </button>
            </td>
        </tr>
    );
}
export default StudentTableRow;
