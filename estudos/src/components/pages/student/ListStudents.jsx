import React, { useEffect, useRef, useState } from 'react';
import StudentTableRow from './StudentTableRow';
import ScrollArea from '../../layout/ScrollArea';
import FirebaseContext from '../../../utils/FirebaseContext';
import StudentService from '../../../services/StudentService';

const ListStudentsPage = () => (
    <>
        <FirebaseContext.Consumer>
            {(context) => <ListStudents firebase={context} />}
        </FirebaseContext.Consumer>
    </>
);

const ListStudents = ({ firebase }) => {
    const [students, setStudents] = useState([]);
    const prev = useRef();

    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    // eslint-disable-next-line
    const [type, setType] = useState('success');

    useEffect(() => {
        if (prev.current === students) return;
        StudentService.list_onSnapshot(
            firebase.getFirestoreDb(),
            (students) => {
                prev.current = students;
                setStudents(students);
            }
        );
    }, [firebase, students]);

    function generateTable() {
        if (!students) return;
        return students.map((student, i) => {
            return (
                <StudentTableRow
                    student={student}
                    key={i}
                    firebase={firebase}
                />
            );
        });
    }

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

export default ListStudentsPage;
