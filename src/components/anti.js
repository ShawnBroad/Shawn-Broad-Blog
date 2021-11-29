import { Container, Row, Col } from "react-bootstrap";
import blogContent from "./assets/content";
import '../App.css';



const Anti =() => {
    return(
    <>
    <Row>
        <Col xs={4}>   
        <Container className= "heroleft antiimage"></Container>
        </Col>
        <Col xs={8}>
        <Container className= "contentright"><h1>{blogContent[1].Title}</h1><p>{blogContent[1].Info}</p></Container>
        </Col>
    </Row> 
    </>
    )

}

export default Anti