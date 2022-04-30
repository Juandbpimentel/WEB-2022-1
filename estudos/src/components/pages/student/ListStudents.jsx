import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import StudentTableRow from './StudentTableRow';
import ScrollAreaDemo from '../../layout/ScrollAreaDemo';
import './styles.css';

const ListStudents = () => {
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');
    const prev = useRef();

    useEffect(() => {
        if (prev.current === students) return;
        axios
            .get('http://localhost:3002/crud/students/list')
            .then((resp) => {
                prev.current = resp.data;
                setStudents(resp.data);
            })
            .catch((err) => console.log(err));
    }, [students]);

    function deleteStudentById(_id) {
        setStudents(students.filter((student) => student._id !== _id));
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

    //<ScrollAreaDemo size={10}></ScrollAreaDemo>
    return (
        <>
            <main>
                <h4>Estudantes</h4>
                <div id="table-wrapper">
                    <div id="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <span className="text_id">ID</span>
                                    </th>
                                    <th>
                                        <span className="text_name">Nome</span>
                                    </th>
                                    <th>
                                        <span className="text_course">
                                            Curso
                                        </span>
                                    </th>
                                    <th>
                                        <span className="text_ira">IRA</span>
                                    </th>
                                    <th colSpan="2">
                                        <span className="text_action">
                                            Ações
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody style={{ marginTop: '10px' }}>
                                {generateTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
};
export default ListStudents;
