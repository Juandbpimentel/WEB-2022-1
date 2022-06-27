import React, { useEffect, useRef, useState } from 'react'
import StudentTableRow from './StudentTableRow'
import ScrollArea from '../../layout/ScrollArea'
import FirebaseContext from '../../../utils/FirebaseContext'
import StudentService from '../../../services/StudentService'
import RestrictPage from '../RestrictPage'
import Spiner from '../../layout/Spiner'

const ListStudentsPage = ({ setShowToast, setToast }) => (
	<>
		<FirebaseContext.Consumer>
			{(context) => {
				return (
					<RestrictPage isLogged={context.getUser() != null}>
						<ListStudents
							firebase={context}
							setShowToast={setShowToast}
							setToast={setToast}
						/>
					</RestrictPage>
				)
			}}
		</FirebaseContext.Consumer>
	</>
)

const ListStudents = ({ firebase ,setShowToast, setToast}) => {
	const [students, setStudents] = useState([])
	const [loaded, setLoaded] = useState(false)
	const prev = useRef()

	// eslint-disable-next-line
	const [message, setMessage] = useState('')
	// eslint-disable-next-line
	const [type, setType] = useState('success')

	useEffect(() => {
		if (prev.current === students) return
		StudentService.list_onSnapshot(
			firebase.getFirestoreDb(),
			(students) => {
				prev.current = students
				setStudents(students)
				setLoaded(true)
			},
		)
	}, [firebase, students])

	function generateStudentsRows() {
		if (!students) return
		return students.map((student, i) => {
			return (
				<StudentTableRow
					student={student}
					key={i}
					firebase={firebase}
					setShowToast={setShowToast}
					setToast={setToast}
				/>
			)
		})
	}

	function generateTable() {
		if (!loaded) {
			return <Spiner />
		} else {
			return (
				<ScrollArea size={10}>
					<table className='table table-bordered table-striped table-dark mx-auto'>
						<thead>
							<tr>
								<th className='text-center'>ID</th>
								<th className='text-center'>Nome</th>
								<th className='text-center'>Curso</th>
								<th className='text-center'>IRA</th>
								<th colSpan='2' className='text-center'>
									Ações
								</th>
							</tr>
						</thead>
						<tbody>{generateStudentsRows()}</tbody>
					</table>
				</ScrollArea>
			)
		}
	}

	return (
		<>
			<main>
				<h4>Estudantes</h4>
				{generateTable()}
			</main>
		</>
	)
}

export default ListStudentsPage
