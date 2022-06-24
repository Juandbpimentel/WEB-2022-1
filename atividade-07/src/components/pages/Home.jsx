import React from 'react'
import FirebaseContext from '../../utils/FirebaseContext'
import homeImg from '../img/home.jpg'
import RestrictPage from './RestrictPage'

const HomePage = () => {
	return (
		<FirebaseContext.Consumer>
			{(context) => {
				return (
					<RestrictPage isLogged={context.getUser() != null}>
						<Home firebase={context} />
					</RestrictPage>
				)
			}}
		</FirebaseContext.Consumer>
	)
}

const Home = ({ firebase }) => {
	return (
		<main>
			<h5 style={{ textAlign: 'center' }}>
				Sejam bem-vindos ao sistema de gerenciamento da UFC Quixadá
			</h5>
			<img
				src={homeImg}
				alt='Foto com o cenário da universidade federal campus quixadá'
				style={{
					maxHeight: 500,
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			/>
		</main>
	)
}

export default HomePage
