import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import StudentTableRow from './StudentTableRow';

const ListStudents = () => {
    const [students, setStudents] = useState([]);
    const prev = useRef();

    useEffect(() => {
        if (prev.current === students) return;
        axios
            .get('http://localhost:3002/students')
            .then((resp) => {
                prev.current = resp.data;
                setStudents(resp.data);
            })
            .catch((err) => console.log(err));
    }, [students]);

    function deleteStudentById(id) {
        setStudents(students.filter((student) => student.id !== id));
        console.log('deleteUpdateSuccess');
    }

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

    return (
        <>
            <main>
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
            </main>
        </>
    );
};
export default ListStudents;
