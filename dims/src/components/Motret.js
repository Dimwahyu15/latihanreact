import {Card, Button, Container} from "react-bootstrap"

import Dimas from "../Assets/images/designimage/dimas.jpg"

const Motret = () => {
    return(
        <div className="motreet">
                <Container className="col-md-2 mx-auto">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={Dimas} alt="pannn" className="mb-2"  />
                        <Card.Body>
                            <Card.Title>Dimas Motret</Card.Title>
                            <Card.Text>
                            Hai ini potret gabut dimas
                            </Card.Text>
                            <Button variant="primary" href="https://www.instagram.com/iamdimwahyu/">Klik Disini Ya</Button>
                        </Card.Body>
                    </Card>
                </Container>
                
        </div>
    )
}

export default Motret;