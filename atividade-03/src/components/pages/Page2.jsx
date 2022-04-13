import { React } from 'react';
import { Link, useParams } from 'react-router-dom';

const Page2 = () => {
    let params = useParams();
    return (
        <div>
            <h3>ID {params.id}</h3>
            <Link to="/">Voltar para Home</Link>
        </div>
    );
};

export default Page2;
