import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TeacherTableRow({
    teacher: { id, name, salary, admissionDate, teachingArea },
}) {
    const [data, setData] = useState('');

    useEffect(() => {
        let rawData = new Date(admissionDate);
        let string = `${rawData.getDate()}/${rawData.getMonth()}/${rawData.getFullYear()}`;
        setData(string);
    }, [data]);

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
                <button className="btn btn-danger">Apagar</button>
            </td>
        </tr>
    );
}
export default TeacherTableRow;
