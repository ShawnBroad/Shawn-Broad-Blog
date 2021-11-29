import { Carousel } from "react-bootstrap";
import riseagainstfeature from './assets/risefeature.jpg';
import antiflagfeature from './assets/antifeature.jpg';
import ramonesfeature from './assets/ramonesfeature.jpg';
import { Container } from "react-bootstrap";

function BandCarousel (){
  return(
   <Container className="carouselContainer">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={riseagainstfeature}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Rise Against!</h3>
      <p>A blog featuring one of the most import punk bands currently on the scene.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={antiflagfeature}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Anti-Flag</h3>
      <p>A blog about a punk band that is straight up in you face and they don't care if you like it or not.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ramonesfeature}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Ramones!</h3>
      <p>One of the bands that started it all in the punk scene.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container> 
  )
}

export default BandCarousel