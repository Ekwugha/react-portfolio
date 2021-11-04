import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, ValidationError } from '@formspree/react';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
import Title from '../about-contact-title/title.component';
import './contact.styles.css';

function Contact() {
    const [state, handleSubmit] = useForm("meqvnpzp");
    if (state.succeeded) {
        return ( <section className="py-5">
        <Container>
            <Row>
                <Col>
                    <div className="box-shadow-full">
                        <Row>
                        <h3 className="text-center bg-success text-light pb-2">Thank you for contacting me. I'll be with you shortly.</h3>
                            <Col data-aos="fade-up-right" md={6} className="message">
                                <Title> Send A Message </Title>
                                <form name="contact" className="py-3" data-netlify="true"  id="my-form" onSubmit={handleSubmit}>
                                    <div className="form-group py-2">
                                        <input type="name" name="name" id="name" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <ValidationError 
                                        prefix="Name" 
                                        field="Name"
                                        errors={state.errors}
                                    />
                                    <div className="form-group py-2">
                                        <input type="email"  name="email" id="email" className="form-control" placeholder="Your Email" required />
                                    </div>
                                    <ValidationError 
                                        prefix="Email" 
                                        field="E-mail"
                                        errors={state.errors}
                                    />
                                     <div className="form-group py-2">
                                        <input type="tel"  name="tel" id="tel" className="form-control" placeholder="Your Phone Number" required />
                                    </div>
                                    <ValidationError 
                                        prefix="Tel" 
                                        field="Phone-number"
                                        errors={state.errors}
                                    />
                                    <div className="form-group py-2">
                                        <textarea type="message" name="message" id="message" cols="120" rows="5" className="form-control" placeholder="Your Message" required></textarea>
                                    </div>
                                    <ValidationError 
                                        prefix="Message" 
                                        field="Message"
                                        errors={state.errors}
                                    />
                                    <button disabled={state.submitting} type="submit" className="contact btn-block text-uppercase text-white py-3 my-4" name="Submit">send message</button> 
                                </form>
                            </Col>
                            <Col md={6} data-aos="fade-up">
                                <Title> Get In Touch </Title>
                                <p className="lead py-3">
                                    Get in touch with me, I am ready to work remotely or for any organization, partner up with developers around the world to work on some exciting project and also as a freelancer to give you and your brand a really nice website.
                                </p>
                                <ul className="list">
                                    <li className="pb-2">
                                        <span className="list-icon"> <FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
                                        <span className="contact-text">Lagos, Nigeria</span>
                                    </li>
                                    <li className="pb-2">
                                        <span className="list-icon"> <FontAwesomeIcon icon={faPhoneAlt} /> </span>
                                        <span>(+234) 708 6000 042</span>
                                    </li>
                                    <li className="pb-2">
                                        <span className="list-icon"> <FontAwesomeIcon icon={faEnvelope} /> </span>
                                        <span>elloekwugha@gmail.com</span> 
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <ul className="list  pt-3">
                                        <li>
                                            <a href="https://twitter.com/darealElo_" target="_blank" rel="noreferrer">
                                                <span className="ico-circle">
                                                    <FontAwesomeIcon className="icon1 text-dark" icon={faTwitter} />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list px-5 pt-3">
                                        <li>
                                            <a href="https://www.instagram.com/darealdan_/?hl=en" target="_blank" rel="noreferrer">
                                                <span className="ico-circle">
                                                    <FontAwesomeIcon className="icon1 text-dark" icon={faInstagram} />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list pt-3">
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100062158207318" target="_blank" rel="noreferrer">
                                                <span className="ico-circle">
                                                    <FontAwesomeIcon className="icon1 text-dark" icon={faFacebookF} />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list px-5 pt-3">
                                        <li>
                                            <a href="https://github.com/Ekwugha" target="_blank" rel="noreferrer">
                                                <span className="ico-circle">
                                                    <FontAwesomeIcon className="icon1 text-dark" icon={faGithub} />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>);

    }

    return (
        <section className="py-5">
            <Container>
                <Row>
                    <Col>
                        <div className="box-shadow-full">
                            <Row>
                                <Col data-aos="fade-up-right" md={6} className="message">
                                    <Title> Send A Message </Title>
                                    <form name="contact" className="py-3" data-netlify="true"  id="my-form" onSubmit={handleSubmit}>
                                        <div className="form-group py-2">
                                            <input type="name" name="name" id="name" className="form-control" placeholder="Your Name" required />
                                        </div>
                                        <ValidationError 
                                            prefix="Name" 
                                            field="name"
                                            errors={state.errors}
                                        />
                                        <div className="form-group py-2">
                                            <input type="email"  name="email" id="email" className="form-control" placeholder="Your Email" required />
                                        </div>
                                        <ValidationError 
                                            prefix="Email" 
                                            field="email"
                                            errors={state.errors}
                                        />
                                        <div className="form-group py-2">
                                            <input type="tel"  name="tel" id="tel" className="form-control" placeholder="Your Phone-Number" required />
                                        </div>
                                        <ValidationError 
                                            prefix="Tel" 
                                            field="Phone Number"
                                            errors={state.errors}
                                        />
                                        <div className="form-group py-2">
                                            <textarea type="message"  name="message" id="message" cols="120" rows="5" className="form-control" placeholder="Your Message"
                                                required></textarea>
                                        </div>
                                        <ValidationError 
                                            prefix="Message" 
                                            field="message"
                                            errors={state.errors}
                                        />
                                        <button disabled={state.submitting} type="submit" className="contact btn-block text-uppercase text-white py-3 my-4" name="Submit">send message</button> 
                                    </form>
                                </Col>
                                <Col md={6} data-aos="fade-up">
                                    <Title> Get In Touch </Title>
                                    <p className="lead py-3">
                                        Get in touch with me, I am ready to work remotely or for any organization, partner up with developers around the world to work on some exciting project and also as a freelancer to give you and your brand a really nice website.
                                    </p>
                                    <ul className="list">
                                        <li className="pb-2">
                                            <span className="list-icon"> <FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
                                            <span className="contact-text">Lagos, Nigeria</span>
                                        </li>
                                        <li className="pb-2">
                                            <span className="list-icon"> <FontAwesomeIcon icon={faPhoneAlt} /> </span>
                                            <span>(+234) 708 6000 042</span>
                                        </li>
                                        <li className="pb-2">
                                            <span className="list-icon"> <FontAwesomeIcon icon={faEnvelope} /> </span>
                                            <span>elloekwugha@gmail.com</span> 
                                        </li>
                                    </ul>
                                    <div className="d-flex">
                                        <ul className="list pt-3">
                                            <li>
                                                <a href="https://twitter.com/darealElo_" target="_blank" rel="noreferrer">
                                                    <span className="ico-circle">
                                                        <FontAwesomeIcon className="icon1 text-dark" icon={faTwitter} />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="list px-5 pt-3">
                                            <li>
                                                <a href="https://www.instagram.com/darealdan_/?hl=en" target="_blank" rel="noreferrer">
                                                    <span className="ico-circle">
                                                        <FontAwesomeIcon className="icon1 text-dark" icon={faInstagram} />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="list pt-3">
                                            <li>
                                                <a href="https://www.facebook.com/profile.php?id=100062158207318" target="_blank" rel="noreferrer">
                                                    <span className="ico-circle">
                                                        <FontAwesomeIcon className="icon1 text-dark" icon={faFacebookF} />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="list px-5 pt-3">
                                            <li>
                                                <a href="https://github.com/Ekwugha" target="_blank" rel="noreferrer">
                                                    <span className="ico-circle">
                                                        <FontAwesomeIcon className="icon1 text-dark" icon={faGithub} />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
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

export default Contact;