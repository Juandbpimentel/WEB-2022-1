import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
                <Route path="students" element={<ListStudents />} />
                <Route path="/editStudent/:_id" element={<EditStudent />} />

                <Route path="createTeacher" element={<CreateTeacher />} />
                <Route path="teachers" element={<ListTeachers />} />
                <Route path="/editTeacher/:_id" element={<EditTeacher />} />
            </Routes>
        </div>
    );
}

export default App;
