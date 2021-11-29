import { Container, Row, Col } from "react-bootstrap"
import Shawn from './assets/shawn.jpg'
import Robo from './assets/robo.jpg'
import { useState,} from "react"
function AboutUs () {
    let initialTXT = 'Shawn has grown up listening to and playing punk/ska/and pop punk. With his extensive background in the scene he has chosen to share his knowledge about the subject with you.';
    let initialTXT2 ='Dr. Razz Le Dazzle does not really do much. He just kinda puts his name on things'
    let newTXT='he does not know what he is doing half of the time' 
    let noTXT='NO RAZZLE DAZZLE FOR YOU!!!'
    const [text,setText] = useState(initialTXT)
    const handleClick = () =>{
        setText(newTXT)
    }
    const [info,setInfo] = useState(initialTXT2)
    const handleClick2=()=>{
        setInfo(noTXT)
    }

    
    return(
    <>


        <Container>
            <Row>
                <Col>
                    <Container className= "authorphoto "
                     onClick={(e)=>{
                        e.preventDefault();
                        handleClick()}
                    }><img className=' img-fluid' src={Shawn} alt="Shawn Broad"></img></Container>
                </Col>
                <Col>
                    <Container className= 'authorphoto'><img className='img-fluid' src={Robo} alt= 'Dr. Raz Le Dazzle'
                    onClick={(e)=>{
                        e.preventDefault();
                        handleClick2();}
                    }
                    ></img></Container>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container className='authorinfo'>
                        <h3>Shawn Broad</h3>
                        <p>
                        {text}
                        </p>
                    </Container>
                </Col>
                <Col>
                    <Container className='authorinfo'>
                        <h3>Dr. Razz Le Dazzle</h3>
                        <p> {info}</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default AboutUs