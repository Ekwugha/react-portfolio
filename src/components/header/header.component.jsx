import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HeaderTitle from './header.title'
import './header.styles.css';

export default function Header(props) {
    return (
        <div className="img" style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.9)) ,url('assest/mee.jpg')`,
            backgroundColor: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.9))`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <Container>
                <Row className="vheight align-items-center">
                    <Col>
                        <HeaderTitle> {props.title} </HeaderTitle>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
