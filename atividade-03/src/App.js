import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';

import CreateStudent from './components/pages/student/CreateStudent';
import ListStudents from './components/pages/student/ListStudents';
import EditStudent from './components/pages/student/EditStudent';

import CreateTeacher from './components/pages/teacher/CreateTeacher';
import ListTeachers from './components/pages/teacher/ListTeachers';
import EditTeacher from './components/pages/teacher/EditTeacher';

import Navbar from './components/layout/Navbar';

function App() {
    return (
        <div className="container text-light">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />

                <Route path="createStudent" element={<CreateStudent />} />
                <Route path="listStudents" element={<ListStudents />} />
                <Route path="/editStudent/:id" element={<EditStudent />} />

                <Route path="createTeacher" element={<CreateTeacher />} />
                <Route path="listTeachers" element={<ListTeachers />} />
                <Route path="/editTeacher/:id" element={<EditTeacher />} />
            </Routes>
        </div>
    );
}

export default App;
