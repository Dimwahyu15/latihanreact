import { Button, Col, Container, Row } from "react-bootstrap"

const Intro = () => {
    return(
        <div className="intro">
            <Container className="text-dark text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">Kegabutan <span>Dimas Wahyu</span></div>
                        <div className="title">Semoga Bermanfaat Walaupun Dikit...</div>
                        <div className="introButton m-4 text-center">
                            <Button variant="light" href="#desainku">
                                Explore
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro;