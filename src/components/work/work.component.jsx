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
                                                        <Card className="h-100">
                                                            <a href="https://whitelist-d-ml231zkqa-ekwugha.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/whitelist.png" href="https://whitelist-d-ml231zkqa-ekwugha.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    This is a whitelist project for an upcoming NFT collection which gives early supporters access to my NFT Collection. 
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card className="h-100">
                                                            <a href="https://ico-ekwugha.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/ico.png" href="https://ico-ekwugha.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    An initial coin offering (ICO) is the cryptocurrency industry's equivalent to an initial public offering (IPO). It is a website where you can claim or mint crypto dev tokens.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card className="h-100">
                                                            <a href="https://nft-collection-alpha-one.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/nft.png" href="https://nft-collection-alpha-one.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    This is a crypto dev NFT Collection where users with crypto dev tokens can mint the NFTs.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card className="h-100">
                                                            <a href="https://decentralized-autonomous-organization-dao.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/dao.png" href="https://decentralized-autonomous-organization-dao.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    DAO stands for Decentralized Autonomous Organization. You can think of DAOs as analogous to companies in the real world. Essentially, DAOs allow for members to create and vote on governance decisions.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card className="h-100">
                                                            <a href="https://defi-exchange-ecru.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                                <img src="assest/defi.png" href="https://defi-exchange-ecru.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                            </a>
                                                            <Card.Body className="mt3">
                                                                <Card.Text>
                                                                    The idea of a decentralized exchange is to allow users to trade their crypto directly on-chain through smart contracts without giving up control of their private keys.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col sm={6} md={4} >
                                                        <Card className="h-100">
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

                                                    <Col sm={6} md={4}>
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

                                                    <Col sm={6} md={4}>
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

                                                    <Col sm={6} md={4}>
                                                        <Card className="h-100">
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


                                    {/* blockchain */}
                                    <Tab eventKey="second" title="Blockchain">
                                        <Row className="no-gutters">
                                            <Col sm={6} md={4}>
                                                <Card className="h-100">
                                                    <a href="https://whitelist-d-ml231zkqa-ekwugha.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/whitelist.png" href="https://whitelist-d-ml231zkqa-ekwugha.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            This is a whitelist project for an upcoming NFT collection which gives early supporters access to my NFT Collection. 
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col sm={6} md={4}>
                                                <Card className="h-100">
                                                    <a href="https://ico-ekwugha.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/ico.png" href="https://ico-ekwugha.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            An initial coin offering (ICO) is the cryptocurrency industry's equivalent to an initial public offering (IPO). It is a website where you can claim or mint crypto dev tokens.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>


                                            <Col sm={6} md={4} >
                                                <Card className="h-100">
                                                    <a href="https://nft-collection-alpha-one.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/nft.png" href="https://nft-collection-alpha-one.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            This is a crypto dev NFT Collection where users with crypto dev tokens can mint the NFTs.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>


                                            <Col sm={6} md={4} className="mx-auto" >
                                                <Card className="h-100">
                                                    <a href="https://decentralized-autonomous-organization-dao.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/dao.png" href="https://decentralized-autonomous-organization-dao.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            DAO stands for Decentralized Autonomous Organization. You can think of DAOs as analogous to companies in the real world. Essentially, DAOs allow for members to create and vote on governance decisions.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>


                                            <Col sm={6} md={4} className="mx-auto" >
                                                <Card className="h-100">
                                                    <a href="https://defi-exchange-ecru.vercel.app/" target="_blank" rel="noreferrer" data-toggle="lightbox" data-gallery="example-gallery">
                                                        <img src="assest/defi.png" href="https://defi-exchange-ecru.vercel.app/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                                                    </a>
                                                    <Card.Body className="mt3">
                                                        <Card.Text>
                                                            The idea of a decentralized exchange is to allow users to trade their crypto directly on-chain through smart contracts without giving up control of their private keys.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>


                                        </Row>
                                    </Tab>


                                    {/* react */}
                                    <Tab eventKey="third" title="React">
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
                                    <Tab eventKey="fourth" title="Node">
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