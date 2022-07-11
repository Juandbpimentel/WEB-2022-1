import { useState, React, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FirebaseContext from '../../../utils/FirebaseContext'
import StudentService from '../../../services/StudentService'
import RestrictPage from '../RestrictPage'

const EditStudentPage = ({ setShowToast, setToast }) => {
	return (
		<FirebaseContext.Consumer>
			{(context) => {
				return (
					<RestrictPage isLogged={context.getUser() != null}>
						<EditStudent
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

function EditStudent({ firebase ,setShowToast, setToast}) {
	const [name, setName] = useState('')
	const [course, setCourse] = useState('')
	const [ira, setIra] = useState()
	const params = useParams()

	const [validate, setValidate] = useState({ name: '', ira: '', course: '' })
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	const validateFields = () => {
		setValidate({ name: '', ira: '', course: '' })
		let res = true
		
		if (name === '' || ira === '' || course === '') {
			res = false
			setToast({
				header: 'Erro!',
				body: 'Preencha todos os campos para concluir cadastro.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			
			let validateAux = { name: '', ira: '', course: '' }
			if (name === '') validateAux.name = 'is-invalid'
			if (ira === '') validateAux.ira = 'is-invalid'
			if (course === '') validateAux.course = 'is-invalid'
			setLoading(false)
			setValidate(validateAux)
			return res
		}

		if (ira < 0 || ira > 10) {
			res = false
			setToast({
				header: 'Erro!',
				body: 'O IRA não pode ser menor que 0 ou maior que 10.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			let validateAux = { ira: '' }
			validateAux.ira = 'is-invalid'
			setValidate(validateAux)
			setLoading(false)
			return res
		}

		return res
	}

	function renderSubmitButton() {
		if (loading == false) {
			return (
				<div
					className='form-group'
					style={{
						paddingTop: 20,
						paddingBottom: 20,
						display: 'flex',
						justifyContent: 'space-evenly',
					}}>
					<input
						type='submit'
						value='Editar Estudante'
						className='btn btn-primary text-light '
						style={{ padding: '5px 5px' }}
					/>
				</div>
			)
		} else {
			return (
				<div
					className='form-group'
					style={{
						paddingTop: 20,
						paddingBottom: 20,
						display: 'flex',
						justifyContent: 'center',
					}}>
					<button
						className='btn btn-light'
						type='button'
						disabled
						style={{
							padding: '5px 5px',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<span
							className='spinner-border spinner-border-sm m-1'
							role='status'
							aria-hidden='true'></span>
						Carregando...
					</button>
				</div>
			)
		}
	}

	const handleSubmit = (evt) => {
		evt.preventDefault()
		setLoading(true)
		if(!validateFields()) return
		const updatedStudent = {
			name,
			course,
			ira,
		}
		StudentService.update(
			firebase.getFirestoreDb(),
			(_id) => {
				console.log(`Estudante ${_id} foi atualizado com sucesso!`)
				setToast({
					header: 'Edição bem sucedida!',
					body: `O Estudante de id ${_id} foi editado com sucesso!`,
					bg: 'success',
					color:'white'
				})
				setShowToast(true)
				navigate('/students', {
					message: `Edição bem sucedida!`,
				})
			},
			params._id,
			updatedStudent,
		)
		/*
		 */
	}

	useEffect(() => {
		StudentService.retrieve_promisse(
			firebase.getFirestoreDb(),
			(student) => {
				setName(student.name)
				setCourse(student.course)
				setIra(student.ira)
			},
			params._id,
		)
	}, [params._id, firebase])

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<main style={{ width: '60%' }}>
			<h2>Editar Estudante</h2>
			<form action='' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor=''>Nome</label>
					<input
						type='text'
						value={name === null || name === undefined ? '' : name}
						name='name'
						onChange={(e) => setName(e.target.value)}
						className={`form-control ${validate.name}`}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor=''>Curso</label>
					<input
						type='text'
						name='course'
						value={course ?? ''}
						onChange={(e) => setCourse(e.target.value)}
						className={`form-control ${validate.course}`}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor=''>IRA</label>
					<input
						type='number'
						name='ira'
						value={ira ?? ''}
						onChange={(e) => setIra(e.target.value)}
						className={`form-control ${validate.ira}`}
					/>
				</div>
				{renderSubmitButton()}
			</form>
			</main>
		</div>
	)
}

export default EditStudentPage
