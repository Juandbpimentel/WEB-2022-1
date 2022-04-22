import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TeacherTableRow(props) {
    const { id, name, salary, admissionDate, teachingArea } = props.teacher;
    const [data, setData] = useState('');
    function deleteTeacher() {
        axios
            .delete(`http://localhost:3002/teachers/${id}`)
            .then((response) => {
                console.log(`Registro do professor de id:${id} foi apagado.`);
                props.deleteTeacherById(id);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        let rawData = new Date(admissionDate);
        let string = `${rawData.getDate()}/${rawData.getMonth()}/${rawData.getFullYear()}`;
        setData(string);
    }, [admissionDate]);

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{salary}</td>
            <td>{data}</td>
            <td>{teachingArea}</td>
            <td>
                <Link to={`/editTeacher/${id}`} className="btn btn-warning">
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
