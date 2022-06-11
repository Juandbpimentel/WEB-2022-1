import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import NegativeBrand from '../img/monocromatic_brand_negative.png';

import FirebaseUserService from '../../services/FirebaseUserService';
import FirebaseContext from '../../utils/FirebaseContext';

const NavbarConsumer = ({ setLogged }) => {
    return (
        <FirebaseContext.Consumer>
            {(context) => <Navbar firebase={context} setLogged={setLogged} />}
        </FirebaseContext.Consumer>
    );
};

const Navbar = ({ firebase, setLogged }) => {
    const navigate = useNavigate();

    function signUp() {
        console.log('sign Up');
    }

    function logout() {
        if (firebase.getUser() != null) {
            FirebaseUserService.logout(firebase.getAuthentication(), (res) => {
                if (res) {
                    firebase.setUser(null);
                    setLogged(false), navigate('/');
                }
            });
        }
    }

    function renderUserLogoutButton() {
        if (firebase.getUser() != null)
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div>
                        <p style={{ marginBottom: '0px' }}>
                            Olá, {`${firebase.getUser().email}`}
                        </p>
                    </div>
                    <button
                        onClick={logout}
                        style={{ marginLeft: 10 }}
                        className="btn btn-light"
                    >
                        Logout
                    </button>
                </div>
            );
        else
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <button
                        onClick={() => {
                            navigate('/');
                        }}
                        style={{ marginLeft: 10 }}
                        className="btn btn-light"
                    >
                        Fazer Log In
                    </button>
                    <button
                        onClick={() => {
                            signUp();
                        }}
                        style={{ marginLeft: 10 }}
                        className="btn btn-light"
                    >
                        Registrar-se
                    </button>
                </div>
            );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
            <div className="container-fluid">
                <Link to={'home'} className="navbar-brand">
                    <img
                        src={NegativeBrand}
                        alt="Logomarca da ufc"
                        style={{ maxHeight: '4rem', paddingLeft: '2.5rem' }}
                    />
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={'home'} className="nav-link">
                                Início
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'about'} className="nav-link">
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
                                className="dropdown-menu dropdown-menu-dark"
                                aria-labelledby="dropdownStudentBtn"
                            >
                                <li>
                                    <Link
                                        className="nav-item dropdown-item"
                                        to={'createStudent'}
                                    >
                                        Criar Estudante
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-item dropdown-item"
                                        to={'students'}
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
                                className="dropdown-menu dropdown-menu-dark"
                                aria-labelledby="dropdownTeacherBtn"
                            >
                                <li>
                                    <Link
                                        to={'createTeacher'}
                                        className="dropdown-item"
                                    >
                                        Criar Professor
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'teachers'}
                                        className="dropdown-item"
                                    >
                                        Ver Professores
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {renderUserLogoutButton()}
            </div>
        </nav>
    );
};
export default NavbarConsumer;
