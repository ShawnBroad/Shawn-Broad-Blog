import { Container, Row, Col } from "react-bootstrap";
import blogContent from "./assets/content";
import '../App.css';



const Sum =() => {
    return(
    <>
    <Row>
        <Col xs={4}>   
        <Container className= "heroleft sumimage"></Container>
        </Col>
        <Col xs={8}>
        <Container className= "contentright"><h1>{blogContent[6].Title}</h1><p>{blogContent[6].Info}</p></Container>
        </Col>
    </Row> 
    </>
    )

}

export default Sum