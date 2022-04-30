import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import TeacherTableRow from './TeacherTableRow';

const ListTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const prev = useRef();

    useEffect(() => {
        if (prev.current === teachers) return;
        axios
            .get('http://localhost:3001/teachers')
            .then((resp) => {
                prev.current = resp.data;
                setTeachers(resp.data);
            })
            .catch((err) => console.log(err));
    }, [teachers]);

    const deleteTeacherById = (_id) => {
        setTeachers(teachers.filter((teacher) => teacher._id !== _id));
        console.log('deleteUpdateSuccess');
    };

    function generateTable() {
        if (!teachers) return;
        return teachers.map((teacher, i) => {
            return (
                <TeacherTableRow
                    teacher={teacher}
                    key={i}
                    deleteTeacherById={deleteTeacherById}
                />
            );
        });
    }

    return (
        <div>
            <h4>Professores</h4>
            <table
                className="table table-striped table-dark"
                style={{ marginTop: 20 }}
            >
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Salário</td>
                        <td>Universidade</td>
                        <td>Área de formação</td>
                        <th colSpan="2" style={{ textAlign: 'center' }}>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>{generateTable()}</tbody>
            </table>
        </div>
    );
};
export default ListTeachers;
