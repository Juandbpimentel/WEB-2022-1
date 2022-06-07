import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import StudentTableRow from './StudentTableRow';
import ScrollArea from '../../layout/ScrollArea';

const ListStudents = () => {
    // eslint-disable-next-line
    const [students, setStudents] = useState([]);
    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    // eslint-disable-next-line
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
                <ScrollArea size={10}>
                    <table className="table table-bordered table-striped table-dark mx-auto">
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Nome</th>
                                <th className="text-center">Curso</th>
                                <th className="text-center">IRA</th>
                                <th colSpan="2" className="text-center">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>{generateTable()}</tbody>
                    </table>
                </ScrollArea>
            </main>
        </>
    );
};
export default ListStudents;
