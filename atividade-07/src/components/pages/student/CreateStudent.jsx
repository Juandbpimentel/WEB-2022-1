import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StudentService from '../../../services/StudentService'

import FirebaseContext from '../../../utils/FirebaseContext'
import RestrictPage from '../RestrictPage'

const CreateStudentPage = ({ setShowToast, setToast }) => {
	return (
		<FirebaseContext.Consumer>
			{(context) => {
				return (
					<RestrictPage isLogged={context.getUser() != null}>
						<CreateStudent
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

const CreateStudent = ({ firebase, setShowToast, setToast }) => {
	const [name, setName] = useState('')
	const [ira, setIra] = useState('')
	const [course, setCourse] = useState('')

	const [validate, setValidate] = useState({ name: '', ira: '', course: '' })
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	function handleChangeName(evt) {
		setName(evt.target.value)
	}

	function handleChangeIra(evt) {
		setIra(evt.target.value)
	}
	
	function handleChangeCourse(evt) {
		setCourse(evt.target.value)
	}
	
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
						value='Criar Estudante'
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

	function handleSubmit(e) {
		e.preventDefault()
		setLoading(true)
		if (!validateFields()) return
		const newStudent = { name: name, ira: ira, course: course }

		StudentService.create(
			firebase.getFirestoreDb(),
			(_id) => {
				console.log(`Estudante ${_id} foi criado com sucesso!`)
				setToast({
					header: 'Criação bem sucedida!',
					body: `O Estudante de id ${_id} foi criado com sucesso!`,
					bg: 'success',
					color: 'white'

				})
				setShowToast(true)
				navigate('/students', {
					message: `Cadastro bem sucedido!`,
				})
			},
			newStudent,
		)
	}

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<main style={{ width: '60%' }}>
				<h2>Criar Estudante</h2>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor=''>Nome</label>
						<input
							type='text'
							value={
								name === null || name === undefined ? '' : name
							}
							placeholder='Digite seu nome'
							name='name'
							onChange={handleChangeName}
							className={`form-control ${validate.name}`}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor=''>IRA</label>
						<input
							type='number'
							value={ira ?? ''}
							placeholder='Digite o valor do seu IRA'
							name='ira'
							onChange={handleChangeIra}
							className={`form-control ${validate.ira}`}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor=''>Curso</label>
						<input
							type='text'
							value={course ?? ''}
							placeholder='Digite o nome do seu curso'
							name='course'
							onChange={handleChangeCourse}
							className={`form-control ${validate.course}`}
						/>
					</div>
					{renderSubmitButton()}
				</form>
			</main>
		</div>
	)
}
export default CreateStudentPage
