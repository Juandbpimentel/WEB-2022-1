import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';

function StudentTableRow({
    student: { _id, name, course, ira },
    deleteStudentById,
    firebase,
}) {
    function deleteStudent(_id, name) {
        let res = window.confirm(
            `Você deseja mesmo excluir o estudante de nome: ${name} ?`
        );
        if (res) {
            console.log('ok');
            let ref = firebase.getFirestoreDb();
            const docRef = doc(ref, 'students', _id);
            deleteDoc(docRef)
                .then(() => {
                    console.log(`${name} apagado.`);
                })
                .catch((err) => console.err(err));
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
