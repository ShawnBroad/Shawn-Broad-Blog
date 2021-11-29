import { Container, Row, Col } from "react-bootstrap";
import blogContent from "./assets/content";
import '../App.css';



const Ramones =() => {
    return(
    <>
    <Row>
        <Col xs={4}>   
        <Container className= "heroleft ramonesimage"></Container>
        </Col>
        <Col xs={8}>
        <Container className= "contentright"><h1>{blogContent[2].Title}</h1><p>{blogContent[2].Info}</p></Container>
        </Col>
    </Row> 
    </>
    )

}

export default Ramones