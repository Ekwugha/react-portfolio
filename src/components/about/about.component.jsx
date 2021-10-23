import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import Title from '../about-contact-title/title.component';
import './about.styles.css';

function About() {
    return (
        <section className="py-5">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="box-shadow-full">
                            <Row>
                                <Col lg={5}>
                                    <Image data-aos='flip-up' src="assest/elo.jpg" className="about-img img rounded img-fluid" alt="Elochukwu" />
                                    <div className="col-md-12 about-info py-4">
                                        <p data-aos='faderight'>
                                            <span className="title-span">Name: </span>
                                            <span>Ekwugha Elochukwu</span>
                                        </p>
                                        <p data-aos='faderight'>
                                            <span className="title-span">Profile: </span>
                                            <span>Web Developer</span>
                                        </p>
                                        <p data-aos='faderight'>
                                            <span className="title-span">Email: </span>
                                            <span>elloekwugha@gmail.com</span>
                                        </p>
                                        <p data-aos='faderight'>
                                            <span className="title-span">Phone: </span>
                                            <span>+234 708 6000 042</span>
                                        </p>
                                    </div>
                                </Col>
                                <Col data-aos='zoom-in' lg={7} className="text-dark">
                                   <Title> About Me </Title>
                                    <p className="lead mt-4">
                                        My name is Ekwugha Elochukwu. I'm a front-end developer with a full-stack background and a keen eye for design. I focus on building single page application with React.
                                    </p>
                                    <p className="lead">
                                        I'm working on becoming a mobile developer but now I help bussiness owners and entrepreneurs to scale their bussiness, income and life radically to allow them win in both offline and the digital world without any struggle.
                                    </p>
                                    <p className="lead">
                                        I specialize in creating a website and web apps for clients ranging from indiviuals and small bussiness all the way up to large enterprise corporations. I'M KEEN TO WORKING FOR COMPANIES AND ALSO PARTNERING WITH INDIVIDUALS WITH HIGHLY DEVELOPMENTAL IDEAS. I am very skilled with developing or building website from the scratch and also making web applications.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default About;
