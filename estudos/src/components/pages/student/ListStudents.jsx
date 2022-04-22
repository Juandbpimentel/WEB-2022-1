import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import StudentTableRow from './StudentTableRow';

const ListStudents = () => {
    const [students, setStudents] = useState([]);

    const prev = useRef();
    useEffect(() => {
        if (prev.current === students) return;
        prev.current = students;
        axios
            .get('http://localhost:3002/students')
            .then((resp) => setStudents(resp.data))
            .catch((err) => console.log(err));
    }, [students.length]);

    function generateTable() {
        if (!students) return;
        return students.map((student, i) => {
            return (
                <StudentTableRow
                    student={student}
                    key={i}
                    deleteStudentById={deleteStudentById}
                />
            );
        });
    }

    function deleteStudentById(id) {
        let studentsTemp = students;
        for (let i = 0; i < studentsTemp.length; i++)
            if (studentsTemp[i].id === id) {
                studentsTemp.splice(i, 1);
            }
        setStudents(studentsTemp);
    }

    return (
        <div>
            <h4>Estudantes</h4>
            <table
                className="table table-striped table-dark"
                style={{ marginTop: 20 }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
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
export default ListStudents;
