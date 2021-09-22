import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../title/title.component';
import SkillsData from '../skillsdata/skillsdata.component';
import Paragraph from '../skills-work-title-paragraph/skills-work-title-paragraph.component'
import './skills.styles.css';

function Skills() {
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                    <div className="mt-5">
                        <Title>Technical Skill set</Title>
                    </div>
                    <Paragraph>I'm constantly learning and keeping up to date with the latest technologies so I can pick the best tech for the job </Paragraph>
                    </Col>
                    <Col xs={12} className="my-5">
                        <Row>
                            <SkillsData />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;
