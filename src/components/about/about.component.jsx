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
                                    <Image data-aos='flip-up' src="assest/photo-1 (3).jpg" className="about-img img rounded img-fluid" alt="Elochukwu" />
                                    <div className="col-md-12 about-info py-4">
                                        <p data-aos='faderight'>
                                            <span className="title-span">Name: </span>
                                            <span>Ekwugha Elochukwu</span>
                                        </p>
                                        <p data-aos='faderight'>
                                            <span className="title-span">Profile: </span>
                                            <span>Blockchain Developer</span>
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
                                   <div className='text-justify'>
                                        <p className="lead mt-4">
                                            My name is Ekwugha Elochukwu and I'm a blockchain developer.
                                        </p>
                                        <p className="lead">
                                            I have good background in frontend web development (HTML/CSS/JS/React/Next) from high school and also from my internship program. I picked up the pace with my coding journey during the pandemic and have been able to  reteach myself frontend and after that also learn blockchain development since then.
                                        </p>
                                        <p className="lead">
                                            I put myself through LearnWeb3DAO course and also got some graduation NFTs and I can work as either a Front-end dApp developer or a Smart Contract developer. This is my portfolio filled with my projects and some Knowledge about me. I'M KEEN TO WORKING FOR COMPANIES AND ALSO PARTNERING WITH INDIVIDUALS WITH HIGHLY DEVELOPMENTAL IDEAS. 
                                        </p>
                                   </div>
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
