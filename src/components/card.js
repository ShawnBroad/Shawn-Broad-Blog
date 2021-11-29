import Card from 'react-bootstrap/Card';
import {Button, Col} from 'react-bootstrap';
import cardContent from './cards';
import { Link } from 'react-router-dom';


const RenderCard = () => {
    return(

        cardContent.map((cardData,i)=>
 <Col>
        <Card  key={i} style={{ width: '18rem'  }}>
  <Card.Img height='200em' variant="top"  src={cardData.Image} />
  <Card.Body>
    <Card.Title className='cardbody'>{cardData.Title}</Card.Title>
    <Card.Text className='cardbody'>
        {cardData.Text}
    </Card.Text>
    <Button variant="primary" href={cardData.Link}>Go to Blog</Button>
  </Card.Body>
</Card>
</Col>

        )
    )
}

 

export default RenderCard

