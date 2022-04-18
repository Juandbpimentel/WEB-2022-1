import React from 'react';
import { Link } from 'react-router-dom';
import horizontalBrand from '../img/horizontalbrand.png';

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light "
            style={{ background: '#d7d3db' }}
        >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img
                        src={horizontalBrand}
                        alt="Logomarca da ufc"
                        style={{ maxHeight: 50 }}
                    />
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Início
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link">
                                Sobre Nós
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                to="/"
                                className="nav-link dropdown-toggle"
                                id="dropdownStudentBtn"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Estudantes
                            </Link>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownStudentBtn"
                            >
                                <li>
                                    <Link
                                        className="nav-item dropdown-item"
                                        to="createStudent"
                                    >
                                        Criar Estudante
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-item dropdown-item"
                                        to="listStudents"
                                    >
                                        Ver Estudantes
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                to="/"
                                className="nav-link dropdown-toggle"
                                id="dropdownTeacherBtn"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Professores
                            </Link>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownTeacherBtn"
                            >
                                <li>
                                    <Link
                                        to="createTeacher"
                                        className="dropdown-item"
                                    >
                                        Criar Professor
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="listTeachers"
                                        className="dropdown-item"
                                    >
                                        Ver Professores
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
