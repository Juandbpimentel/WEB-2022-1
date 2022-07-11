import { React, useState } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'

//rotas
import Login from './components/pages/Login'
import About from './components/pages/About'

import CreateStudent from './components/pages/student/CreateStudent'
import ListStudents from './components/pages/student/ListStudents'
import EditStudent from './components/pages/student/EditStudent'

import CreateTeacher from './components/pages/teacher/CreateTeacher'
import ListTeachers from './components/pages/teacher/ListTeachers'
import EditTeacher from './components/pages/teacher/EditTeacher'

import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'

import SignUp from './components/pages/SignUp'

import ToastMessage from './components/layout/ToastMessage'

function App() {
	const [toast, setToast] = useState({ header: '', body: '', bg: 'Light', color:'black' })
	const [showToast, setShowToast] = useState(false)

	const renderToast = () => {
		return (
			<ToastMessage
				show={showToast}
				header={toast.header}
				body={toast.body}
				color = {toast.color}
				setShowToast={setShowToast}
				bg={toast.bg}
			/>
		)
	}

	return (
		<div className='text-light'>
			<Navbar />
			<div className='container-fluid' style={{ padding: '2rem 2rem' }}>
				<Routes>
					<Route
						path='/'
						element={
							<Login
								setToast={setToast}
								setShowToast={setShowToast}
							/>
						}
					/>
					<Route
						path='signUp'
						element={
							<SignUp
								setToast={setToast}
								setShowToast={setShowToast}
							/>
						}
					/>
					<Route path='home' element={<Home />} />
					<Route path='about' element={<About />} />

					<Route
						path='createStudent'
						element={
							<CreateStudent
								setToast={setToast}
								setShowToast={setShowToast}
							/>
						}
					/>
					<Route
						path='students'
						element={
							<ListStudents
								setToast={setToast}
								setShowToast={setShowToast}
							/>
						}
					/>
					<Route
						path='/editStudent/:_id'
						element={
							<EditStudent
								setToast={setToast}
								setShowToast={setShowToast}
							/>
						}
					/>

					<Route
						path='createTeacher'
						element={
							<CreateTeacher
								setToast={setToast}
								setShowToast={setShowToast}
							/>
						}
					/>
					<Route
						path='teachers'
						element={
							<ListTeachers
								setToast={setToast}
								setShowToast={setShowToast}
							/>
						}
					/>
					<Route
						path='/editTeacher/:_id'
						element={
							<EditTeacher
								setToast={setToast}
								setShowToast={setShowToast}
							/>
						}
					/>
				</Routes>
			</div>
			{renderToast()}
		</div>
	)
}

export default App
