import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

import Login from './components/pages/Login';
import About from './components/pages/About';

import CreateStudent from './components/pages/student/CreateStudent';
import ListStudents from './components/pages/student/ListStudents';
import EditStudent from './components/pages/student/EditStudent';

import CreateTeacher from './components/pages/teacher/CreateTeacher';
import ListTeachers from './components/pages/teacher/ListTeachers';
import EditTeacher from './components/pages/teacher/EditTeacher';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import RestrictPage from './components/pages/RestrictPage';

function App() {
    return (
        <div className="text-light">
            <Navbar />
            <div className="container-fluid" style={{ padding: '2rem 2rem' }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />

                    <Route path="createStudent" element={<CreateStudent />} />
                    <Route path="students" element={<ListStudents />} />
                    <Route path="/editStudent/:_id" element={<EditStudent />} />

                    <Route path="createTeacher" element={<CreateTeacher />} />
                    <Route path="teachers" element={<ListTeachers />} />
                    <Route path="/editTeacher/:_id" element={<EditTeacher />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
