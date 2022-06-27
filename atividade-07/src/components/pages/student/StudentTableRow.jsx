import React from 'react';
import { Link } from 'react-router-dom';
import StudentService from '../../../services/StudentService';

function StudentTableRow({ student: { _id, name, course, ira }, firebase, setShowToast, setToast }) {
    function deleteStudent(_id, name) {
        let res = window.confirm(
            `Você deseja mesmo excluir o estudante de nome: ${name} ?`
        );
        if (res) {
            console.log('ok');
            StudentService.delete(
                firebase.getFirestoreDb(),
                (_id) => {
                    console.log(`Estudante de id ${_id} apagado com sucesso.`);
                },
                _id
            );
        }
        /*
        axios
            .delete(`http://localhost:3002/crud/students/delete/${_id}`)
            .then(() => {
                console.log(
                    `Registro do aluno de id:${_id} foi apagado com sucessso!`
                );
                deleteStudentById(_id);
            })
            .catch((err) => console.log(err));
        
        */
    }
    return (
        <tr>
            <td className="text-center">
                <span>{_id}</span>
            </td>
            <td className="text-center">
                <span>{name}</span>
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
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        deleteStudent(_id, name);
                    }}
                >
                    Apagar
                </button>
            </td>
        </tr>
    );
}
export default StudentTableRow;
