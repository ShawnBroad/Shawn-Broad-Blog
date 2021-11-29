import { Container, Row, Col } from "react-bootstrap";
import blogContent from "./assets/content";
import '../App.css';



const Streetlight =() => {
    return(
    <>
    <Row>
        <Col xs={4}>   
        <Container className= "heroleft streetimage"></Container>
        </Col>
        <Col xs={8}>
        <Container className= "contentright"><h1>{blogContent[3].Title}</h1><p>{blogContent[3].Info}</p></Container>
        </Col>
    </Row> 
    </>
    )

}

export default Streetlight