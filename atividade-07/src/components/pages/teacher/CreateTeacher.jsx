import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FirebaseContext from '../../../utils/FirebaseContext'
import TeacherService from '../../../services/TeacherService'
import RestrictPage from '../RestrictPage'

const CreateTeacherPage = ({ setShowToast, setToast }) => {
	return (
		<FirebaseContext.Consumer>
			{(firebase) => {
				return (
					<RestrictPage isLogged={firebase.getUser()}>
						<CreateTeacher
							firebase={firebase}
							setShowToast={setShowToast}
							setToast={setToast}
						/>
					</RestrictPage>
				)
			}}
		</FirebaseContext.Consumer>
	)
}

const CreateTeacher = ({ firebase, setShowToast, setToast }) => {
	const [name, setName] = useState('')
	const [salary, setSalary] = useState('')
	const [university, setUniversity] = useState('')
	const [degree, setDegree] = useState('')

	const [validate, setValidate] = useState({
		name: '',
		salary: '',
		university: '',
		degree: '',
	})

	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	function handleChangeName(evt) {
		setName(evt.target.value)
	}

	function handleChangeSalary(evt) {
		setSalary(evt.target.value)
	}

	function handleChangeuniversity(evt) {
		setUniversity(evt.target.value)
	}

	function handleChangedegree(evt) {
		setDegree(evt.target.value)
	}

	const validateFields = () => {
		let res = true
		setValidate({ name: '', salary: '', university: '', degree: '' })

		if (
			name === '' ||
			salary === '' ||
			university === '' ||
			degree === ''
		) {
			setToast({
				header: 'Erro!',
				body: 'Preencha todos os campos para concluir o cadastro.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			setLoading(false)
			res = false
			let validateObj = {
				name: '',
				salary: '',
				university: '',
				degree: '',
			}
			if (name === '') validateObj.name = 'is-invalid'
			if (salary === '') validateObj.salary = 'is-invalid'
			if (degree === '') validateObj.degree = 'is-invalid'
			if (university === '') validateObj.university = 'is-invalid'
			setValidate(validateObj)
			return res
		}

		if (salary <= 0) {
			setToast({
				header: 'Erro!',
				body: 'O salário não pode ser 0 ou negativo.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			setLoading(false)
			let validateObj = {
				salary: '',
			}

			validateObj.salary = 'is-invalid'
			setValidate(validateObj)
			res = false
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
						value='Criar Professor'
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

		const newTeacher = {
			name: name,
			salary: salary,
			university: university,
			degree: degree,
		}
		TeacherService.create(
			firebase.getFirestoreDb(),
			(_id) => {
				console.log(`Cadastro de professor de id ${_id} bem sucedido!`)
				setToast({
					header: 'Cadastro bem sucedido!',
					body: `O Professor de id ${_id} foi cadastrado com sucesso!`,
					bg: 'success',
					color:'white'
				})
				setShowToast(true)
				navigate('/teachers', {
					message: `Cadastrado bem sucedido!`,
				})
			},
			newTeacher,
		)

		/*
        
        */
	}

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<main style={{ width: '60%' }}>
				<h2>Criar Professor</h2>
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
						<label htmlFor=''>Salário</label>
						<input
							type='number'
							value={salary ?? ''}
							placeholder='Digite o salário recebido pelo professor'
							name='salary'
							onChange={handleChangeSalary}
							className={`form-control ${validate.salary}`}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor=''>Universidade</label>
						<input
							type='text'
							value={university ?? ''}
							placeholder='Digite qual foi é a faculdade de formação do professor'
							name='university'
							onChange={handleChangeuniversity}
							className={`form-control ${validate.university}`}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor=''>Área de formação</label>
						<input
							type='text'
							value={degree ?? ''}
							placeholder='Digite qual é a área de formação do professor'
							name='degree'
							onChange={handleChangedegree}
							className={`form-control ${validate.degree}`}
						/>
					</div>
					{renderSubmitButton()}
				</form>
			</main>
		</div>
	)
}
export default CreateTeacherPage
