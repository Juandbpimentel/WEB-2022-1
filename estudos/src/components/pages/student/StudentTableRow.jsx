import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function StudentTableRow({
    student: { _id, name, course, ira },
    deleteStudentById,
}) {
    function deleteStudent() {
        if(window.confirm(`Você deseja mesmo excluir o estudante de ID: ${_id} ?`))  
        axios
            .delete(`http://localhost:3002/crud/students/delete/${_id}`)
            .then(() => {
                console.log(
                    `Registro do aluno de id:${_id} foi apagado com sucessso!`
                );
                deleteStudentById(_id);
            })
            .catch((err) => console.log(err));
    }
    return (
        <tr>
            <td className="row_id">
                <span>{_id}</span>
            </td>
            <td>
                <span className="row_name">{name}</span>
            </td>
            <td className="text-center">
                <span>{course}</span>
            </td>
            <td className="text-center">
                <span>{ira}</span>
            </td>
            <td className="text-center">
                <Link
                    to={`/editStudent/${_id}`}
                    className="btn btn-warning text-dark"
                >
                    Editar
                </Link>
            </td>
            <td className="text-center">
                <button className="btn btn-danger" onClick={deleteStudent}>
                    Apagar
                </button>
            </td>
        </tr>
    );
}
export default StudentTableRow;
