import { Nav, Navbar, Container} from "react-bootstrap"



const Navigationbar =  () => {
    return(
    <div>
       <Navbar>
        <Container>
            <Navbar.Brand className="text-white">DIMS <span>.</span></Navbar.Brand>
            <Nav>
                <Nav.Link href="intro">About me</Nav.Link>
                <Nav.Link href="#desainku">My Desgin</Nav.Link>
                <Nav.Link>My project</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
            </Nav>
        </Container>
       </Navbar>
    </div>
    )
}

export default Navigationbar;