import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.webp";
import ban2 from "../images/ban2.webp";
import ban3 from "../images/ban3.webp";
import ban4 from "../images/ban4.webp";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TopCOllections from '../components/TopCOllections';
import AllProducts from '../components/AllProducts';
// import w1 from "../images/w1.jpg";

const Home=()=>{
    return(
        <>
          <Carousel>
      <Carousel.Item>
        <img src={ban2} width="100%" height="300" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban1} width="100%" height="300" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban3} width="100%" height="300" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban4} width="100%" height="300" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    <h1> Out Top Collections</h1>
      <TopCOllections/>
      <hr/>

     <h1>All Products</h1>
     <AllProducts/>  
        </>
    )
}

export default Home;