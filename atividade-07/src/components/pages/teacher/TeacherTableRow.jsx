import { Link } from 'react-router-dom';
import TeacherService from '../../../services/TeacherService';

function TeacherTableRow({
    teacher: { _id, name, salary, university, degree },
    firebase,
    setShowToast, 
    setToast 
}) {
    function deleteTeacher() {
        let res = window.confirm(
            `Você deseja mesmo excluir o professor de ID: ${_id} ?`
        );
        if (res) {
            TeacherService.delete(
                firebase.getFirestoreDb(),
                (_id) => {
                    if(_id === null){
                        setToast({
                            header: 'Erro!',
                            body: 'Não foi possível deletar o professor, tente novamente.',
                            bg: 'danger',
                            color: 'black',
                        })
                        setShowToast(true)
                    }
                    console.log(
                        `Registro do professor de id:${_id} foi apagado.`
                    );
                    setToast({
                        header: 'Deleção bem sucedida!',
                        body: `Professor de id ${_id} foi apagado com sucesso!`,
                        bg: 'success',
                        color:'white'
                    })
                    setShowToast(true)
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
            <td className="text-center">
                <span>{_id}</span>
            </td>
            <td className="text-center">
                <span>{name}</span>
            </td>
            <td className="text-center">
                <span>{salary}</span>
            </td>
            <td className="text-center">
                <span>{university}</span>
            </td>
            <td className="text-center">
                <span>{degree}</span>
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
