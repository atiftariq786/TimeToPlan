import React from "react";
//import  React,{useState} from "react";
import Carousel from "react-bootstrap/Carousel"
import Styles from "./Carousel.module.css";

const ControlledCarousel = () => {
  /*
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);

    };
    //activeIndex={index} direction={direction} onSelect={handleSelect}
    */
    return (
      <Carousel className={Styles.carouselMain} >
        <Carousel.Item>
          <img 
            className="d-block w-100 "
            style={{height:"500px"}}
            src={require("../../../src/images/Dessert_Safari.jpg")}
            alt="First slide"
          />
          <Carousel.Caption className={Styles.Craouseltext}>
            <h2 className = {Styles.carouselTitle}>Make a Plan for World Famous Desert Safari</h2>
            <p>Dubai, UAE–The Arabian Desert. Nevada, USA – The Black Rock Desert.</p>
            <p>Namibia, South Africa – The Namib Desert. Erg Chebbi, Morocco – The Sahara Desert.</p>
            <p>Outback, Australia – The Great Victoria Desert.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src= {require("../../../src/images/skydive.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption className={Styles.Craouseltext}>
          <h2 className = {Styles.carouselTitle}>TOP PLACES TO SKYDIVE AROUND THE WORLD</h2>
          <p>Outerspace.
          Mount Everest, Nepal. ...
          Victoria Falls, South Africa. ...
          Santa Barbara, California. Santa Barbara is the location of North America's highest tandem skydive, at 18,000 ft!
          Interlaken, Switzerland. ...
          Fox Glacier, New Zealand. ...
          Dubai, United Arab Emirates. ...
          Denarau Island, Fiji. ...
          </p>
        </Carousel.Caption>
        </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src={require("../../../src/images/HawaiiHikes__Hero_.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption className={Styles.Craouseltext}>
          <h2 className = {Styles.carouselTitle}>BE READY FOR HIKING</h2>
          <h3>Best Places in North America</h3>
          <p>Grand Teton National Park.
          Arches National Park.
          Olympic National Park.
          Kluane National Park and Reserve.
          Lake Tahoe.
          Big Sur.
          Telluride.
          Hawaii - The Big Island.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src= {require("../../../src/images/ski-resorts.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption className={Styles.Craouseltext}>
          <h2 className = {Styles.carouselTitle}>The Top Ski Resorts in the World</h2>
          <p>Revelstoke, BC. We still love Reve! ...
          Zinal/Grimentz, Switzerland. Swiss charm with serious kick ass terrain! ...
          Whistler, BC. ...
          Cortina d'Ampezzo, Italy. ...
          La Clusaz, France. ...
          Castle Mountain, Alberta. ...
          Niseko, Japan. ...
          Telluride, Colorado.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"500px"}}
          src={require("../../../src/images/incredible-car-wallpaper-lamborghini-terzo-millennio-digital-art-hd-cars-4k-wallpapers.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption className={Styles.Craouseltext}>
          <h2 className = {Styles.carouselTitle}>The Most Famous Car Races in the World</h2>
          <p>
          Monaco Grand Prix. The Formula One Monaco Grand Prix is held annually on the Circuit de Monaco since 1929. ...
          Indianapolis 500. ...
          24 Hours of Le Mans. ...
          Daytona 500. ...
          Bathurst 1000. ...
          Rally Finland
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }

export default ControlledCarousel;