import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import Aos from 'aos';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './landingpage.styles.css';

const LandingPage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return (
        <header className="img" style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.9)) ,url('assest/mee.jpg')`,
            backgroundColor: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.9))`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover' 
        }}>
            <Container>
                <Row className="height align-items-center py-5 text-center">
                    <Col>
                        <h1 data-aos='slide-right' className="intro-title text-light text-center mb-5 title">I Am Ekwugha Elochukwu</h1>
                        <h1 className="intro-subtitle text-white mb-2">
                            <span  className="text-white">
                                <strong>
                                    <Typewriter options={{
                                            strings: ['Web Developer', 'React Developer',  'Full-Stack Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}/>
                                </strong>
                            </span>
                        </h1>
                        <Link to='/about' bsstyle="primary" data-aos='fade-up' className="btn-color text-light nounderline btn btn-outline-light btn-lg mt-4 text-capitalize">
                            about me
                        </Link>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default LandingPage;