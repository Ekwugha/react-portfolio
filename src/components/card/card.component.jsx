import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Icon from '../icon/icon.component';
import './card.styles.css';

export default function CardBody( {title, body, id, icon, footer1, footer2, footer3} ) {
    return (
        <Col data-aos='zoom-in' md={6} xl={3} className="my-4">
            <Card className="d-card">
                <Card.Body className="m-3">
                    <Icon> {icon} </Icon>
                    <Card.Title className="my-4 text-capitalize text-center"> { title } </Card.Title>
                    <Card.Text className="text-muted"> { body } </Card.Text>
                   <span className='footer1'> {footer1} </span>
                   <span className='footer2' > {footer2} </span>
                   <span  className='footer3'> {footer3} </span>
                </Card.Body>
            </Card>
        </Col> 
    );
}
