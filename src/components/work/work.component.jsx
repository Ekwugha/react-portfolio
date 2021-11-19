import React from 'react';
import Title from '../title/title.component';
import Paragraph from '../skills-work-title-paragraph/skills-work-title-paragraph.component';
import { Container, Col, Row, Card, Tabs, Tab } from 'react-bootstrap';
import './work.styles.css'

function Work() {
    return (
        <div className="py-5 text-center">
            <Container>
                <Row>
                    <Col>
                        <Title> Project </Title>
                        <Paragraph> I seldomly update the work here but you can go to my <a href="https://github.com/Ekwugha" target="_blank" rel="noreferrer">github</a> and check for the source code of any project and also for newly updated project too. </Paragraph>
                        <Row>
                            <Col sm={12}>
                                <Tabs data-aos='fade-up' defaultActiveKey="first" className="justify-content-center nav-pills py-3">
                                    {/* all row */}
                                    <Tab eventKey="first" title="All" className="tabss">
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="reactSection" role="tabpanel" aria-labelledby="all">
                                                <Row className="no-gutters py-5">
                                                    <Col sm={6} md={4} >
                                                        <Card>
                                                            <a href="https://ekwugha.github.io/price-comparison-website/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/html1.png" href="https://ekwugha.github.io/price-comparison-website/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    This is a price comparison website that is literally use to check for the difference in price of a gadjet from different online stores. 
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card>
                                                            <a href="https://ekwugha.github.io/hotel-site/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/html4.png" href="https://ekwugha.github.io/hotel-site/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    A hotel site where a client can come and book a room and to also check for services rendered in the hotel.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card>
                                                            <a href="https://ekwugha.github.io/resturant-menu/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/js1.png" href="https://ekwugha.github.io/resturant-menu/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    A resturant menu made with vanilla javascript to get menu of a resturant from an Api and display it to the users.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card>
                                                            <a href="https://github.com/Ekwugha/crwn-clothing" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/react1.png" href="https://github.com/Ekwugha/crwn-clothing" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    An online shopping mall where I use the Stripe Api to allow users pay for a product and also be able to store items in a cart.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card>
                                                            <a href="https://elorestaurantapp.netlify.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/restaurant.png" href="https://elorestaurantapp.netlify.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    I created an e-commerce app with react for a restaurant. The site tells about the restaurant and also allows buying/ordering food online.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card>
                                                            <a href="https://elochatapp.netlify.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/chatapp.png" href="https://https://elochatapp.netlify.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    This is a chat app that allows users to create a chat group and invite their friends to send messages and images to each other.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} className="mx-auto">
                                                        <Card>
                                                            <a href="https://github.com/Ekwugha/shopping-cart" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/node.png" href="https://github.com/Ekwugha/shopping-cart" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                I created a shopping cart where admin can be able to post new products and pages then users can login and purchase products.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Tab>


                                    {/* html/css */}
                                    <Tab eventKey="second" title="HTML/CSS">
                                        <Row>
                                            <Col sm={6}>
                                                <Card>
                                                    <a href="https://ekwugha.github.io/price-comparison-website/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/html1.png" href="https://ekwugha.github.io/price-comparison-website/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            This is a price comparison website that is literally use to check for the difference in price of a gadjet from different online stores. 
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6}>
                                                <Card>
                                                    <a href="https://ekwugha.github.io/hotel-site/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/html4.png" href="https://ekwugha.github.io/hotel-site/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            A hotel site where a client can come and book a room and to also check for services rendered in the hotel.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab>


                                    {/* javascript */}
                                    <Tab eventKey="third" title="JavaScript">
                                        <Row>
                                            <Col sm={6}>
                                                <Card>
                                                    <a href="https://ekwugha.github.io/price-comparison-website/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/html1.png" href="https://ekwugha.github.io/price-comparison-website/" alt="Portfolio-Item" className="card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            A hotel site where a client can come and book a room and to also check for services rendered in the hotel.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6}>
                                                <Card>
                                                    <a href="https://ekwugha.github.io/resturant-menu/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/js1.png" href="https://ekwugha.github.io/resturant-menu/" alt="Portfolio-Item" className="card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            A resturant menu made with vanilla javascript to get menu of a resturant from an Api and display it to the users.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab>


                                    {/* react */}
                                    <Tab eventKey="fourth" title="React">
                                        <Row>
                                            <Col sm={6}>
                                                <Card>
                                                    <a href="https://github.com/Ekwugha/crwn-clothing" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/react1.png" href="https://github.com/Ekwugha/crwn-clothing" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            An online shopping mall where I use the Stripe Api to allow users pay for a product and also be able to store items in a cart.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6}>
                                                <Card>
                                                    <a href="https://elorestaurantapp.netlify.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/restaurant.png" href="https://elorestaurantapp.netlify.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            I created an e-commerce app with react for a restaurant. The site tells about the restaurant and also allows buying/ordering food online.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6} >
                                                <Card>
                                                    <a href="https://elochatapp.netlify.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/chatapp.png" href="https://elochatapp.netlify.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            This is a chat app that allows users to create a chat group and invite their friends to send messages and images to each other.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab>

                                    {/* nodejs */}
                                    <Tab eventKey="fifth" title="Node">
                                        <Row>
                                            <Col sm={6}>
                                                <Card>
                                                    <a href="https://github.com/Ekwugha/shopping-cart" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/node.png" href="https://github.com/Ekwugha/shopping-cart" alt="Portfolio-Item" className="card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            I created a shopping cart where admin can be able to post new products and pages then users can login and purchase products.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Work;