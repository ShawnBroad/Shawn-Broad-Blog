import {Container, CardGroup} from 'react-bootstrap';
import RenderCard from './card';
import BandCarousel from './carousel';


const Home = () =>{
    return(
<> 

<Container className='homeContent group1'>
    <h2>Welcome!</h2>
    <p>Here we have a collection of various blogs on bands that have influenced the punk, pop punk, and ska genres.
        We hope that you enjoy them and pleas feel free to submit ideas for bands, improvements, or any other questions or concerns for us on our About Us page.
        Thank you and enjoy! 
    </p>

</Container>
<BandCarousel/>
<Container className='homeContent2'><h1>Featured Blogs</h1> <p>Small collection of our favorite blog posts!</p></Container>
<Container>
    <CardGroup>
        <RenderCard/>
    </CardGroup>
</Container>
</>
    )
}

export default Home