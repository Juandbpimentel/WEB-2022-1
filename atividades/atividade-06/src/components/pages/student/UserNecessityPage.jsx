import React from 'react';
import { useNavigate } from 'react-router-dom';
const UserNecessityPage = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h3 className="text-light">
                Você precisa se logar para acessar o sistema
            </h3>
            <button
                onClick={() => {
                    navigate('/');
                }}
                style={{ marginLeft: 10 }}
                className="btn btn-light"
            >
                Fazer Log In
            </button>
        </div>
    );
};
export default UserNecessityPage;
