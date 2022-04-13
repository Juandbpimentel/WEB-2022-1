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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link
                        to="/"
                        className="navbar-brand"
                        style={{ paddingLeft: 20 }}
                    >
                        UFC
                    </Link>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="createStudent" className="nav-link">
                                    Criar Estudante
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="listStudent" className="nav-link">
                                    Listar Estudante
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

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
