import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navbar.styles.css';

export default function CustomNavbar() {
    const [navbar, setNavbar] = useState(false);
    const [navbarbrand, setColor] = useState(false);
    const [expanded, setExpanded] = useState(false);    

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
            
        } else {
            setNavbar(false);
        }
    };

    const changeColor = () => {
        if(window.scrollY >= 80){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeColor);
        
        return (
            <Navbar expanded={expanded} scrolling='true' light="true" expand="md" fixed="top" variant="dark" bg="transparent" className={navbar ? 'navbar active' : 'navbar'}>
                <Container>
                    <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text-bold py-3' : 'text-light  text-bold py-3'}>ELOCHUKWU</Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} className={navbarbrand ? 'color' : 'text-light text'}>
                        <FontAwesomeIcon icon={faBars}  size="lg"/>
                    </Navbar.Toggle  >
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Home </Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > About </Nav.Link>
                        <Nav.Link as={Link} to="/service" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Service </Nav.Link>
                        <Nav.Link as={Link} to="/skills" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Skills </Nav.Link>
                        <Nav.Link as={Link} to="/work" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Work </Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Contact </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
}