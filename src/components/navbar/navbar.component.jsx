import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
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
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Home </Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > About </Nav.Link>
                        <Nav.Link as={Link} to="/service" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Service </Nav.Link>
                        <Nav.Link as={Link} to="/skills" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Skills </Nav.Link>
                        <Nav.Link as={Link} to="/work" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Work </Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > Contact </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="https://twitter.com/darealElo_" target="_blank" rel="noopener" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > <FontAwesomeIcon icon={faTwitter} size = 'lg' /> </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/darealdan_/?hl=en" target="_blank" rel="noopener" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > <FontAwesomeIcon icon={faInstagram} size = 'lg' /> </Nav.Link>
                        <Nav.Link href="https://www.facebook.com/profile.php?id=100062158207318" target="_blank" rel="noopener" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > <FontAwesomeIcon icon={faFacebookF} size = 'lg' /> </Nav.Link>
                        <Nav.Link href="https://github.com/Ekwugha" target="_blank" rel="noopener" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'text-light text'} > <FontAwesomeIcon icon={faGithub} size = 'lg' /> </Nav.Link>
                    </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
}