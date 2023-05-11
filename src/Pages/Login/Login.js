import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const {login} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            setError(error);
        })
    }

    return (
        <div>
            <h3 align="center">Login</h3>
            <Form onSubmit={handleLogin} className='w-25 border p-5 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>{error}</p>
                <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            </Form>
        </div>
    );
};

export default Login;