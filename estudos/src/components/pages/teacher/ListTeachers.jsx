import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import TeacherTableRow from './TeacherTableRow';

const ListTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [teachersPrev, setTeachersPrev] = useState();
    useEffect(() => {
        console.log(prev.current);
        console.log(teachers);
        if (prev.current === teachers) return;
        else {
            prev.current = teachers;
            console.log(prev.current);
            console.log(teachers);
            axios
                .get('http://localhost:3002/teachers')
                .then((resp) => setTeachers(resp.data))
                .catch((err) => console.log(err));
        }
    }, [prev.current]);

    function deleteTeacherById(id) {
        let teachersTemp = teachers;
        for (let i = 0; i < teachersTemp.length; i++) {
            if (teachersTemp[i].id === id) {
                teachersTemp.splice(i, 1);
            }
        }
        setTeachers(teachersTemp);
        prev.current = teachers;
        console.log('deleteSuccess');
    }

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
                        <td>Data de Admissão</td>
                        <td>Área de Ensino</td>
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
