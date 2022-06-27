import React, { useEffect, useRef, useState } from 'react'
import TeacherTableRow from './TeacherTableRow'
import ScrollArea from '../../layout/ScrollArea'
import FirebaseContext from '../../../utils/FirebaseContext'
import TeacherService from '../../../services/TeacherService'
import RestrictPage from '../RestrictPage'
import Spiner from '../../layout/Spiner'

const ListTeachersPage = ({ setShowToast, setToast }) => {
	return (
		<FirebaseContext.Consumer>
			{(context) => {
				return (
					<RestrictPage isLogged={context.getUser() != null}>
						<ListTeachers
							firebase={context}
							setShowToast={setShowToast}
							setToast={setToast}
						/>
					</RestrictPage>
				)
			}}
		</FirebaseContext.Consumer>
	)
}

const ListTeachers = ({ firebase, setShowToast, setToast }) => {
	const [teachers, setTeachers] = useState([])
	const prev = useRef()

	// eslint-disable-next-line
	const [message, setMessage] = useState('')
	// eslint-disable-next-line
	const [type, setType] = useState('success')
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		if (prev.current === teachers) return
		TeacherService.list_onSnapshot(
			firebase.getFirestoreDb(),
			(teachers) => {
				prev.current = teachers
				setTeachers(teachers)
				setLoaded(true)
			},
		)
	}, [firebase, teachers])

	function generateTeachersRows() {
		if (!teachers) return
		return teachers.map((teacher, i) => {
			return (
				<TeacherTableRow
					teacher={teacher}
					key={i}
					firebase={firebase}
					setShowToast={setShowToast}
					setToast={setToast}
				/>
			)
		})
	}

	function generateTable() {
		if (loaded) {
			return (
				<ScrollArea size={10}>
					<table className='table table-bordered table-striped table-dark mx-auto'>
						<thead>
							<tr>
								<th className='text-center'>ID</th>
								<th className='text-center'>Nome</th>
								<th className='text-center'>Salário</th>
								<th className='text-center'>Universidade</th>
								<th className='text-center'>
									Área de formação
								</th>
								<th colSpan='2' className='text-center'>
									Ações
								</th>
							</tr>
						</thead>
						<tbody>{generateTeachersRows()}</tbody>
					</table>
				</ScrollArea>
			)
		} else return <Spiner />
	}

	return (
		<div>
			<h4>Professores</h4>
			{generateTable()}
		</div>
	)
}
export default ListTeachersPage
