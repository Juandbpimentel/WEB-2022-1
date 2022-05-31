import React, { useEffect, useRef, useState } from 'react';
import StudentTableRow from './StudentTableRow';
import ScrollArea from '../../layout/ScrollArea';
import { collection, query, onSnapshot } from 'firebase/firestore';
import FirebaseContext from '../../../utils/FirebaseContext';

const ListStudentsPage = () => (
    <>
        <FirebaseContext.Consumer>
            {(firebase) => <ListStudents firebase={firebase} />}
        </FirebaseContext.Consumer>
    </>
);

const ListStudents = ({ firebase }) => {
    // eslint-disable-next-line
    const [students, setStudents] = useState([]);
    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    // eslint-disable-next-line
    const [type, setType] = useState('success');
    const prev = useRef();

    useEffect(() => {
        if (prev.current === students) return;
        let ref = firebase.getFirestoreDb();
        const q = query(collection(ref, 'students'));
        onSnapshot(q, alimentarStudents);
    }, [firebase, students]);

    function alimentarStudents(query) {
        let students = [];
        query.forEach(
            (doc) => {
                const { name, course, ira } = doc.data();
                students.push({
                    _id: doc.id,
                    name,
                    course,
                    ira,
                });
            } //doc
        ); //forEach
        prev.current = students;
        setStudents(students);
    }

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
                    firebase={firebase}
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

export default ListStudentsPage;
