import { Link } from 'react-router-dom';
import TeacherService from '../../../services/TeacherService';

function TeacherTableRow({
    teacher: { _id, name, salary, university, degree },
    firebase,
}) {
    function deleteTeacher() {
        let res = window.confirm(
            `Você deseja mesmo excluir o professor de ID: ${_id} ?`
        );
        if (res) {
            TeacherService.delete(
                firebase.getFirestoreDb(),
                (_id) => {
                    console.log(
                        `Registro do professor de id:${_id} foi apagado.`
                    );
                },
                _id
            );
        }
    }
    /*
        const [data, setData] = useState('');
        useEffect(() => {
            let rawData = new Date(university);
            let string = `${rawData.getDate()}/${rawData.getMonth()}/${rawData.getFullYear()}`;
            setData(string);
        }, [university]);
    */

    return (
        <tr>
            <td className="row_id">
                <span>{_id}</span>
            </td>
            <td>
                <span className="row_name">{name}</span>
            </td>
            <td>
                <span className="row_name">{salary}</span>
            </td>
            <td>
                <span className="row_name">{university}</span>
            </td>
            <td>
                <span className="row_name">{degree}</span>
            </td>
            <td className="text-center">
                <Link
                    to={`/editTeacher/${_id}`}
                    className="btn btn-warning text-dark"
                >
                    Editar
                </Link>
            </td>
            <td className="text-center">
                <button className="btn btn-danger" onClick={deleteTeacher}>
                    Apagar
                </button>
            </td>
        </tr>
    );
}
export default TeacherTableRow;
