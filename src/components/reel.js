import { Container, Row, Col } from "react-bootstrap";
import blogContent from "./assets/content";
import '../App.css';



const Reel =() => {
    return(
    <>
    <Row>
        <Col xs={4}>   
        <Container className= "heroleft reelimage"></Container>
        </Col>
        <Col xs={8}>
        <Container className= "contentright"><h1>{blogContent[4].Title}</h1><p>{blogContent[4].Info}</p></Container>
        </Col>
    </Row> 
    </>
    )

}

export default Reel