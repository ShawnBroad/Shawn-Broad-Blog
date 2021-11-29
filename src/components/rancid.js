import { Container, Row, Col } from "react-bootstrap";
import blogContent from "./assets/content";
import '../App.css';



const Rancid =() => {
    return(
    <>
    <Row>
        <Col xs={4}>   
        <Container className= "heroleft rancidimage"></Container>
        </Col>
        <Col xs={8}>
        <Container className= "contentright"><h1>{blogContent[7].Title}</h1><p>{blogContent[7].Info}</p></Container>
        </Col>
    </Row> 
    </>
    )

}

export default Rancid