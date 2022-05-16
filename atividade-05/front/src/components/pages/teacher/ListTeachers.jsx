import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import TeacherTableRow from './TeacherTableRow';
import ScrollArea from '../../layout/ScrollArea';

const ListTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    // eslint-disable-next-line
    const [message, setMessage] = useState('');
    // eslint-disable-next-line
    const [type, setType] = useState('success');
    const prev = useRef();

    useEffect(() => {
        if (prev.current === teachers) return;
        axios
            .get('http://localhost:3002/crud/teachers/list')
            .then((resp) => {
                prev.current = resp.data;
                setTeachers(resp.data);
            })
            .catch((err) => console.log(err));
    }, [teachers]);

    const deleteTeacherById = (_id) => {
        setTeachers(teachers.filter((teacher) => teacher._id !== _id));
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
            <ScrollArea size={10}>
                <table className="table table-bordered table-striped table-dark mx-auto">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Nome</th>
                            <th className="text-center">Salário</th>
                            <th className="text-center">Universidade</th>
                            <th className="text-center">Área de formação</th>
                            <th colSpan="2" className="text-center">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>{generateTable()}</tbody>
                </table>
            </ScrollArea>
        </div>
    );
};
export default ListTeachers;
