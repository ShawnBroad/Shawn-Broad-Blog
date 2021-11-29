import { Container, Row, Col } from "react-bootstrap";
import blogContent from "./assets/content";
import '../App.css';




const Adtr =() => {
    return(
    <>
    <Row>
        <Col xs={4}>   
        <Container className= "heroleft adtrimage"></Container>
        </Col>
        <Col xs={8}>
        <Container className= "contentright"><h1>{blogContent[5].Title}</h1><p>{blogContent[5].Info}</p></Container>
        </Col>
    </Row> 
    </>
    )

}

export default Adtr