import React from 'react';
import teachers from './data';

import TeacherTableRow from './TeacherTableRow';

const ListTeachers = () => {
    function generateTable() {
        if (!teachers) return;
        return teachers.map((teacher, i) => {
            return <TeacherTableRow teacher={teacher} key={i} />;
        });
    }

    return (
        <div>
            <h4>Professores</h4>
            <table className="table table-striped text-light" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Salário</td>
                        <td>Data de Admissão</td>
                        <td>Área de Ensino</td>
                        <th colSpan="2">Ações</th>
                    </tr>
                </thead>
                <tbody>{generateTable()}</tbody>
            </table>
        </div>
    );
};
export default ListTeachers;
