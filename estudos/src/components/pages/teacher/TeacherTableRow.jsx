import axios from 'axios';
//import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TeacherTableRow(props) {
    const { _id, name, salary, university, degree } = props.teacher;

    function deleteTeacher() {
        axios
            .delete(`http://localhost:3002/crud/teachers/delete/${_id}`)
            .then((response) => {
                console.log(`Registro do professor de id:${_id} foi apagado.`);
                props.deleteTeacherById(_id);
            })
            .catch((error) => console.log(error));
    }
    /*
        const [data, setData] = useState('');
        useEffect(() => {
            let rawData = new Date(university);
            let string = `${rawData.getDate()}/${rawData.getMonth()}/${rawData.getFullYear()}`;
            setData(string);
        }, [university]);
    */

    return (
        <tr>
            <td className="row_id">
                <span>{_id}</span>
            </td>
            <td>
                <span className="row_name">{name}</span>
            </td>
            <td>
                <span className="row_name">{salary}</span>
            </td>
            <td>
                <span className="row_name">{university}</span>
            </td>
            <td>
                <span className="row_name">{degree}</span>
            </td>
            <td className="text-center">
                <Link
                    to={`/editTeacher/${_id}`}
                    className="btn btn-warning text-dark"
                >
                    Editar
                </Link>
            </td>
            <td className="text-center">
                <button className="btn btn-danger" onClick={deleteTeacher}>
                    Apagar
                </button>
            </td>
        </tr>
    );
}
export default TeacherTableRow;
