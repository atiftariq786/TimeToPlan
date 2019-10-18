import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel"
import Styles from "./Carousel.module.css";

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
    //render(<ControlledCarousel />);
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
      <img 
        className="d-block w-100 "
        style={{height:"300px"}}
        src="https://webstockreview.net/images/planner-clipart-urban-planner-15.png" 
        alt="First slide"
      />
      <Carousel.Caption className={Styles.Craouseltext}>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:"300px"}}
        src="https://clipartstation.com/wp-content/uploads/2017/11/planning-clipart-11.jpg"
        alt="Second slide"
      />

      <Carousel.Caption className={Styles.Craouseltext}>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
      </Carousel>
    );
  }
 
  

  export default ControlledCarousel;