import React from 'react';
import students from './data';

import StudentTableRow from './StudentTableRow';

const ListStudents = () => {
    function generateTable() {
        if (!students) return;
        return students.map((student, i) => {
            return <StudentTableRow student={student} key={i} />;
        });
    }

    return (
        <div>
            <h4>Estudantes</h4>
            <table className=""table table-striped" text-light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                        <th colSpan="2">Ações</th>
                    </tr>
                </thead>
                <tbody>{generateTable()}</tbody>
            </table>
        </div>
    );
};
export default ListStudents;
