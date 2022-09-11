import {Card, CardGroup, Container, Row, Col} from "react-bootstrap"
import "../style/landingpage.css"
import Desain1 from "../Assets/images/designimage/desain1.png"
import Desain2 from "../Assets/images/designimage/desain2.png"
import Desain3 from "../Assets/images/designimage/desain3.png"
import Desain4 from "../Assets/images/designimage/desain4.png"
import Desain5 from "../Assets/images/designimage/desain5.png"
import Desain6 from "../Assets/images/designimage/desain6.png"


const Mydesign = () => {
    return(
        <div className="carddesain">

        <div className="tentangdesain">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="juduldesain">Dimas Ngedesain</div>
                    </Col>
                </Row>
            </Container>
        </div>

            <Container className="group" id="desainku">
                <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={Desain1} alt="desain1" />
                            <Card.Body>
                            <Card.Title>Grooom</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <a href="" className="text-muted" >Selengkapnya</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Desain2} alt="desain2" />
                            <Card.Body>
                            <Card.Title>Triips</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <a href="" className="text-muted" >Selengkapnya</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Desain3} alt="desain3" />
                            <Card.Body>
                            <Card.Title>Dcourse</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <a href="" className="text-muted" >Selengkapnya</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Desain4} alt="desain4" />
                            <Card.Body>
                            <Card.Title>Soulwave</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <a href="" className="text-muted" >Selengkapnya</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Desain5} alt="desain5" />
                            <Card.Body>
                            <Card.Title>Sewajas</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <a href="" className="text-muted" >Selengkapnya</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={Desain6} alt="desain6" />
                            <Card.Body>
                            <Card.Title>MaxTech</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <a href="" className="text-muted" >Selengkapnya</a>
                            </Card.Footer>
                        </Card>
                        </CardGroup>
            </Container>
        </div>
    )
}

export default Mydesign;