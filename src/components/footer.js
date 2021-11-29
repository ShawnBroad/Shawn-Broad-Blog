import { Col, Container, Row } from "react-bootstrap"


const Footer = () =>{
    return(
        <footer>
        <Container fluid className='footer'>
            <Row>
                <Col>
                    <a class="btn btn-dark" href="./" role="button">Home</a>
                    <a class="btn btn-dark" href="./contactus" role="button">Contact Us</a>
                    <a class="btn btn-dark" href="./aboutus" role="button">About Us</a>
                    
                </Col>
                <div class="col"></div>
            </Row>
        </Container>

    </footer>
    )
}

export default Footer