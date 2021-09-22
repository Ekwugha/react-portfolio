import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../title/title.component';
import { ServiceData } from '../servicedata/servicedata.component';

const Services = ({ id, title, body }) => (
    <section className="py-5 text-center">
        <Container>
            <Row>
                <Col>
                    <Title>Services</Title>
                    <Col xs={12} className="mt-5">
                        <Row>
                            <ServiceData />
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    </section>

);

export default Services;
