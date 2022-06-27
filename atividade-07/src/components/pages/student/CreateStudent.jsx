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
	const [ira, setIra] = useState(0)
	const [course, setCourse] = useState('')
	const [validate, setValidate] = useState({ name: '', ira: '', course: '' })

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
			})
			setShowToast(true)

            let validateAux = {name: '', ira: '', course: ''}
            if(name === '') validateAux.name = 'is-invalid'
            if(ira === '') validateAux.ira = 'is-invalid'
            if(course === '') validateAux.course = 'is-invalid'
            setValidate(validateAux)
            return res
		}

        if(ira < 0 || ira > 10){
            res = false
			setToast({
				header: 'Erro!',
				body: 'O IRA não pode ser menor que 0 ou maior que 10.',
				bg: 'danger',
			})
			setShowToast(true)

            let validateAux = {ira: ''}
            validateAux.ira = 'is-invalid'
            setValidate(validateAux)
            return res
        }

		return res
	}

	function handleSubmit(e) {
		e.preventDefault()
        if(!validateFields()) return
		const newStudent = { name: name, ira: ira, course: course }

		StudentService.create(
			firebase.getFirestoreDb(),
			(_id) => {
				console.log(`Estudante ${_id} foi criado com sucesso!`)
				navigate('/students', {
					message: `Cadastro bem sucedido!`,
				})
			},
			newStudent,
		)
	}

	return (
		<div>
			<h2>Criar Estudante</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor=''>Nome</label>
					<input
						type='text'
						value={name === null || name === undefined ? '' : name}
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
						value={ira ?? 0}
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
				<div
					className='form-group'
					style={{ paddingTop: 20, paddingBottom: 20 }}>
					<input
						type='submit'
						value='Criar Estudante'
						className='btn btn-light'
					/>
				</div>
			</form>
		</div>
	)
}
export default CreateStudentPage
