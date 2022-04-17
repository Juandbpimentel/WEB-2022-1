import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
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
                                Início
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="about" className="nav-link">
                                Sobre nós
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/"
                                id="navbarScrollingDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Estudantes
                            </Link>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarScrollingDropdown"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="createStudent"
                                    >
                                        Criar Estudante
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="listStudent"
                                    >
                                        Ver Estudantes
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
