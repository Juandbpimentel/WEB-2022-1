import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import homeImg from '../img/home.jpg';
import styles from './Login.module.css'
import FirebaseContext from '../../utils/FirebaseContext'
import FirebaseUserService from '../../services/FirebaseUserService'

const SignUpPage = () => {
	return (
		<FirebaseContext.Consumer>
			{(context) => <SignUp firebase={context} />}
		</FirebaseContext.Consumer>
	)
}

const SignUp = ({firebase}) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmationPassword, setConfirmationPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	function handleChangeLogin(evt) {
		setUsername(evt.target.value)
	}

	function handleChangePassword(evt) {
		setPassword(evt.target.value)
	}

	function handleChangeConfirmationPassword(evt) {
		setConfirmationPassword(evt.target.value)
	}

	function handleSubmit(evt) {
		evt.preventDefault()
		setLoading(true)
		//console.log({ user: { username, password } });
		FirebaseUserService.signUp(firebase.getAuthentication(),username,password,(resp,content)=>{
			if(resp){
				firebase.setUser(content)
				navigate('/home')
			}
		})
		/*
		
		FirebaseUserService.login(
			firebase.getAuthentication(),
			username,
			password,
			(user) => {
				if (user == null) {
					setLoading(false)
					return
				}
				firebase.setUser(user)
				navigate('/home')
			},
		)
		*/
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
						value='Registrar-se'
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
				<h1>Registrar-se</h1>
				<form onSubmit={handleSubmit} style={{ width: '100%' }}>
					<div className='form-group'>
						<label htmlFor=''>Nome</label>
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
							className='form-control'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor=''>Curso</label>
						<input
							type='password'
							value={password ?? ''}
							placeholder='Digite a sua senha'
							name='password'
							onChange={handleChangePassword}
							className='form-control'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor=''>Curso</label>
						<input
							type='password'
							value={confirmationPassword ?? ''}
							placeholder='Digite a sua senha'
							autoComplete='new-password'
							name='confirmPassword'
							onChange={handleChangeConfirmationPassword}
							className='form-control'
						/>
					</div>
					{renderSubmitButton()}
				</form>
			</main>
		</div>
	)
}
export default SignUpPage

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
