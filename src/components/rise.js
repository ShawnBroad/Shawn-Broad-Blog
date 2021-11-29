import { Container, Row, Col } from "react-bootstrap";
import blogContent from "./assets/content";
import '../App.css';



const Rise =() => {
    return(
    <>
    <Row>
        <Col xs={4}>   
        <Container className= "heroleft riseimage"></Container>
        </Col>
        <Col xs={8}>
        <Container className= "contentright"><h1>{blogContent[0].Title}</h1><p>{blogContent[0].Info}</p></Container>
        </Col>
    </Row> 
    </>
    )

}

export default Rise