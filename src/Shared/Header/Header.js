import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import { Button } from 'react-bootstrap';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Hotel Bilashita</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='ms-5 home' to='/'>Home</Link>
                        <Link className='ms-5 home' to='/'>Packages</Link>
                    </Nav>
                    <Nav>
                         user ? user.uid ? <Button className='ms-5 home' onClick={logOut}>Log Out</Button>
                                :
                                <>
                                    <Link className='ms-5 home' to='/login'>Login</Link>
                                    <Link className='ms-5 home' to='/register'>Sign Up</Link>
                                </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};


export default Header;


