import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="tet-white h4">Collapsed content</h5>
                    <span className="text-muted">
                        Toglleable via the navbar brand
                    </span>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="Container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
