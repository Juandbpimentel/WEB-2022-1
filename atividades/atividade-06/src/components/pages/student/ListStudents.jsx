import React, { useEffect, useRef, useState } from 'react';
import StudentTableRow from './StudentTableRow';
import ScrollArea from '../../layout/ScrollArea';
import FirebaseContext from '../../../utils/FirebaseContext';
import StudentService from '../../../services/StudentService';
import RestrictPage from '../RestrictPage';

const ListStudentsPage = () => (
    <>
        <FirebaseContext.Consumer>
            {(context) => {
                return (
                    <RestrictPage isLogged={context.getUser() != null}>
                        <ListStudents firebase={context} />
                    </RestrictPage>
                );
            }}
        </FirebaseContext.Consumer>
    </>
);

const ListStudents = ({ firebase }) => {
    const [students, setStudents] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const prev = useRef();

    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    // eslint-disable-next-line
    const [type, setType] = useState('success');

    useEffect(() => {
        setLoaded(false);
        if (prev.current === students) return;
        StudentService.list_onSnapshot(
            firebase.getFirestoreDb(),
            (students) => {
                prev.current = students;
                setStudents(students);
                setLoaded(true);
            }
        );
    }, [firebase, students]);

    function generateTable() {
        if (loaded) {
            return (
                <div
                    className="spinner-border"
                    style={{
                        width: '3rem',
                        height: '3rem',
                        alignSelf: 'center',
                    }}
                    role="status"
                ></div>
            );
        } else
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
                                    A????es
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
