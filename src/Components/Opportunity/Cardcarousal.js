import React from 'react'
import "./Cardcarousal.css"
import Slider from "react-slick";
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Cardcarousal() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swip:true,
        autoplay:true,
        autoplaySpeed:3000,
        focusOnSelect:true,
        slidesToScroll: 1
      };
  return (
    <div className='oppo-car'>
        <h1 className='feature'>Featured Opportunities</h1>
        <p className='part'>Participate in these exceptional opportunities curated for the exceptional you!</p>
        <div className='car1'>
        <Slider {...settings}>
          
      <div className='b'>
        <img src="/images/pic1.png"  className='car-img2'/>
        <p>Upward Award 2023 is now live</p>
        <p>Nominate Now</p>
      </div>
      <div className='b'>
      <img src="/images/pic2.jpeg"  className='car-img2'/>
      <p>Bussiness Vally 2.0 | B plan compition</p> 
      <div className='car-icon'>
        <div className='w'><GroupsIcon/> 33,524 Registors </div>
        <div className='w'><CalendarMonthIcon/> 6 Days Left</div>
      
      </div>
      </div>
      <div className='b'>
      <img src="/images/pic3.jpeg"  className='car-img2'/>
      <p>Agoda is back with codegoda 2023</p>
      <div className='car-icon'>
        <div className='w'><GroupsIcon/> 33,524 Registors </div>
        <div className='w'><CalendarMonthIcon/> 6 Days Left</div>
      
      </div>
      </div>
      <div className='b'>
      <img src="/images/pic5.jpeg"  className='car-img2'/>
      <p>Agoda is back with codegoda 2023</p>
      <div className='car-icon'>
        <div className='w'><GroupsIcon/> 33,524 Registors </div>
        <div className='w'><CalendarMonthIcon/> 6 Days Left</div>
      
      </div>
      </div>
      <div className='b'>
      <img src="/images/pic6.png"  className='car-img2'/>
      <p>Agoda is back with codegoda 2023</p>
      <div className='car-icon'>
        <div className='w'><GroupsIcon/> 33,524 Registors </div>
        <div className='w'><CalendarMonthIcon/> 6 Days Left</div>
      
      </div>
      </div>
      <div className='b'>
      <img src="/images/pic7.jpeg"  className='car-img2'/>
      <p>Agoda is back with codegoda 2023</p>
      <div className='car-icon'>
        <div className='w'><GroupsIcon/> 33,524 Registors </div>
        <div className='w'><CalendarMonthIcon/> 6 Days Left</div>
      
      </div>
      </div>
      <div className='b'>
      <img src="/images/sl7.jpeg"  className='car-img2'/>
      <p>Agoda is back with codegoda 2023</p>
      <div className='car-icon'>
        <div className='w'><GroupsIcon/> 33,524 Registors </div>
        <div className='w'><CalendarMonthIcon/> 6 Days Left</div>
      
      </div>
      </div>
    
    </Slider>
      </div>
    </div>
  )
}

export default Cardcarousal