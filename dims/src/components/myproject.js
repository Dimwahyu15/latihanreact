import { Container,Col, Image, Row, Card } from "react-bootstrap"
import React from "../Assets/images/projectku/reacct.png"
import Vue from "../Assets/images/projectku/vue2.jpeg"
import HTML from "../Assets/images/projectku/hcs.png"
import Android from "../Assets/images/projectku/androidstudio.png"
import Laravel from "../Assets/images/projectku/lara.png"
import Phalcon from "../Assets/images/projectku/phalcon.png"


const Myproject = () => {
    return(
        <div id="myproject">
            <Container>

            <div className="tentangproject">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="juduldesain">Proyekan Dimas</div>
                    </Col>
                </Row>
            </Container>
        </div>


            <Row>
               <Col md={4} className="projectWrapper" id="projectku">
                    <Card className="project" >
                        <Image src={Android} alt="pro1" className="pros1" />
                            <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Mobile App Coursearch</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                    </div>
                            </div>
                    </Card>
                </Col>

                <Col md={4} className="projectWrapper" id="projectku">
                    <Card className="project">
                        <Image src={Laravel} alt="pro1" className="pros1" />
                            <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Website Portal Wisata Sleman</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                    </div>
                            </div>
                    </Card>
                </Col>

                <Col md={4} className="projectWrapper" id="projectku">
                    <Card className="project">
                        <Image src={HTML} alt="pro1" className="pros1" />
                            <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Website Naspad</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                    </div>
                            </div>
                    </Card>
                </Col>

                <Col md={4} className="projectWrapper" id="projectku">
                    <Card className="project">
                        <Image src={Phalcon} alt="pro1" className="pros1" />
                            <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Website Sistem Kepegawaian</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                    </div>
                            </div>
                    </Card>
                </Col>

                <Col md={4} className="projectWrapper" id="projectku">
                    <Card className="project">
                        <Image src={React} alt="pro1" className="pros1" />
                            <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DUNE</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                    </div>
                            </div>
                    </Card>
                </Col>

                <Col md={4} className="projectWrapper" id="projectku">
                    <Card className="project">
                        <Image src={Vue} alt="pro1" className="pros1" />
                            <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">DUNE</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                    </div>
                            </div>
                    </Card>
                </Col>



            </Row>   
            </Container>
        </div>
    )
}

export default Myproject;

// buat sticky dinavbar
// buat konten untuk project yang pernah dikerjakan
// buat konten untuk dimas motret
// buat footer
// nyoba hostin github
