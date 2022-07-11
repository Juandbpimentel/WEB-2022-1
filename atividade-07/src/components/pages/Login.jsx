import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import homeImg from '../img/home.jpg';
import styles from './Login.module.css'
import FirebaseContext from '../../utils/FirebaseContext'
import FirebaseUserService from '../../services/FirebaseUserService'

const LoginPage = ({ setShowToast, setToast }) => {
	return (
		<FirebaseContext.Consumer>
			{(context) => (
				<Login
					firebase={context}
					setShowToast={setShowToast}
					setToast={setToast}
				/>
			)}
		</FirebaseContext.Consumer>
	)
}

const Login = ({ firebase, setShowToast, setToast }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	const [validate, setValidate] = useState({ username: '', password: '' })

	const navigate = useNavigate()

	const validateFields = () => {
		let res = true
		setValidate({ username: '', password: '' })

		if (username === '' || password === '') {
			setToast({
				header: 'Erro!',
				body: 'Preencha todos os campos para concluir login.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			setLoading(false)
			res = false
			let validateObj = { username: '', password: '' }
			if (username === '') validateObj.username = 'is-invalid'
			if (password === '') validateObj.password = 'is-invalid'
			setValidate(validateObj)
			return res;
		}
		
		if(password.length < 6){
			setToast({
				header: 'Erro!',
				body: 'A senha precisa ter no mínimo 6 caracteres.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			setLoading(false)
			let validateObj = {
				password: ''
			}
			validateObj.password = 'is-invalid'
			setValidate(validateObj)
			res = false
			return res
		}

		return res
	}

	function handleChangeLogin(evt) {
		setUsername(evt.target.value)
	}

	function handleChangePassword(evt) {
		setPassword(evt.target.value)
	}

	function handleSubmit(evt) {
		evt.preventDefault()
		setLoading(true)
		if (!validateFields()) return
		//console.log({ user: { username, password } });
		FirebaseUserService.login(
			firebase.getAuthentication(),
			username,
			password,
			(user) => {
				if (user == null) {
					setLoading(false)
					setToast({
						header: 'Erro!',
						body: 'Email e/ou Senha incorreto(s).',
						bg: 'danger',
						color: 'black',
					})
					setShowToast(true)
					let validateObj = { username: '', password: '' }
					validateObj.username = 'is-invalid'
					validateObj.password = 'is-invalid'
					setValidate(validateObj)
					return
				}
				firebase.setUser(user)
				navigate('/home')
			},
		)
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
						value='Efetuar Login'
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

	return (
		<div className={`${styles.container}`}>
			<main style={{ width: '60%' }}>
				<h1>Login</h1>
				<form onSubmit={handleSubmit} style={{ width: '100%' }}>
					<div className='form-group'>
						<label htmlFor=''>Email</label>
						<input
							type='username'
							value={
								username === null || username === undefined
									? ''
									: username
							}
							placeholder='Digite seu email'
							name='username'
							autoComplete='username'
							onChange={handleChangeLogin}
							className={`form-control ${validate.username}`}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor=''>Senha</label>
						<input
							type='password'
							value={password ?? ''}
							placeholder='Digite a sua senha'
							autoComplete='current-password'
							name='password'
							onChange={handleChangePassword}
							className={`form-control ${validate.password}`}
						/>
					</div>
					{renderSubmitButton()}
				</form>
			</main>
		</div>
	)
}
export default LoginPage

/*
<h5 style={{ textAlign: 'center' }}>
                Sejam bem-vindos ao sistema de gerenciamento da UFC Quixadá
            </h5>
            <img
                src={homeImg}
                alt="Foto com o cenário da universidade federal campus quixadá"
                style={{
                    maxHeight: 500,
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            />
*/
