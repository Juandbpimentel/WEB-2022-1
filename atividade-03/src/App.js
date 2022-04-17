import { Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import CreateStudent from './components/crud/student/CreateStudent';
import EditStudent from './components/crud/student/EditStudent';
import ListStudent from './components/crud/student/ListStudent';
import Navbar from './components/layout/Navbar';

/*


*/
function App() {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="createStudent" element={<CreateStudent />} />
                <Route path="listStudent" element={<ListStudent />} />
                <Route path="/editStudent/:id" element={<EditStudent />} />
            </Routes>
        </div>
    );
}

/*

function App() {
    return (
        <div className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="createStudent" element={<CreateStudent />} />
                <Route path="listStudent" element={<ListStudent />} />
                <Route path="/editStudent/:id" element={<EditStudent />} />
            </Routes>
        </div>
    );
}
*/

export default App;
