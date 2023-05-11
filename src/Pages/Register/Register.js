import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import { Link } from 'react-router-dom';

const Register = () => {
    const {user, signUp} = useContext(AuthContext);

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        signUp(email, password);
        form.reset();
    }


    return (
        <div>
            <h3 align="center">This is register.</h3>
            <Form onSubmit={handleRegistration} className='w-25 border p-5 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label htmlFor='name'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor='email'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
            </Form>
        </div>
    );
};

export default Register;