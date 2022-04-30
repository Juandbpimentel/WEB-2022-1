import axios from 'axios';
//import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TeacherTableRow(props) {
    const { _id, name, salary, university, degree } = props.teacher;

    function deleteTeacher() {
        axios
            .delete(`http://localhost:3001/teachers/${_id}`)
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
            <td>{_id}</td>
            <td>{name}</td>
            <td>{salary}</td>
            <td>{university}</td>
            <td>{degree}</td>
            <td>
                <Link to={`/editTeacher/${_id}`} className="btn btn-warning">
                    Editar
                </Link>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => deleteTeacher()}
                >
                    Apagar
                </button>
            </td>
        </tr>
    );
}
export default TeacherTableRow;
