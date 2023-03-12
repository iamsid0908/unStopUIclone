import React from 'react'
import "./Crausal.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect,Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
function Crausal() {

  const cards = [
    { title: "Card 1", imageUrl: "/carosal-image/5e895eb520e7b_hero_motocorp.png" },
    { title: "Card 2", imageUrl: "/carosal-image/610122226d364_Welspun_Logo.png" },
    { title: "Card 3", imageUrl: "/carosal-image/6373373a88a47_screenshot_2022-11-15_at_12.21.42_pm.png" },
    { title: "Card 4", imageUrl: "/carosal-image/loreal.png" },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    swip:true,
    autoplay:true,
    autoplaySpeed:3000,
    focusOnSelect:true,
    slidesToScroll: 1
  };
    return (
      <div className='car'>
        <Slider {...settings}>
          
      <div className='a'>
        <img src="/images/sl1.jpeg"  className='car-img'/>
      </div>
      <div className='a'>
      <img src="/images/sl2.jpeg"  className='car-img'/>
      </div>
      <div className='a'>
      <img src="/images/sl3.jpeg"  className='car-img'/>
      </div>
      <div className='a'>
      <img src="/images/sl4.jpeg"  className='car-img'/>
      </div>
      <div className='a'>
      <img src="/images/sl5.jpeg"  className='car-img'/>
      </div>
      <div className='a'>
      <img src="/images/sl6.jpeg"  className='car-img'/>
      </div>
      <div className='a'>
      <img src="/images/sl7.jpeg"  className='car-img'/>
      </div>
    
    </Slider>
      </div>
      )
}

export default Crausal