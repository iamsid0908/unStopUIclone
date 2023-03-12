import React from 'react'
import "./Slider.css"
import { useState, useEffect } from "react";

const cards = [
  { title: "Card 1", imageUrl: "/carosal-image/5e895eb520e7b_hero_motocorp.png" },
  { title: "Card 2", imageUrl: "/carosal-image/610122226d364_Welspun_Logo.png" },
  { title: "Card 3", imageUrl: "/carosal-image/6373373a88a47_screenshot_2022-11-15_at_12.21.42_pm.png" },
  { title: "Card 4", imageUrl: "/carosal-image/loreal.png" },
  { title: "Card 5", imageUrl: "/carosal-image/63634d98de3ee_swiss_re_2013_logo.svg__1_.png"},
  // { title: "Card 6", imageUrl: "/carosal-image/623eeaf56aa71_download__5_.png"},
  { title: "Card 7", imageUrl:"/carosal-image/607e6ca5ed02c_hul.png" },
  { title: "Card 8", imageUrl: "/carosal-image/60ad0f7d5e8a5_unnamed.png"},
  { title: "Card 9", imageUrl: "/carosal-image/5c7d0d3c318e3_Airtel.png" },
  { title: "Card 10", imageUrl: "/carosal-image/loreal.png" },
  { title: "Card 11", imageUrl: "/carosal-image/flip.png" },
  { title: "Card 12", imageUrl: "/carosal-image/loreal.png" },
  { title: "Card 13", imageUrl: "/carosal-image/5e895eb520e7b_hero_motocorp.png" },
  { title: "Card 14", imageUrl: "/carosal-image/610122226d364_Welspun_Logo.png" },
  { title: "Card 15", imageUrl: "/carosal-image/6373373a88a47_screenshot_2022-11-15_at_12.21.42_pm.png" },
  { title: "Card 16", imageUrl: "/carosal-image/loreal.png" },
  { title: "Card 17", imageUrl: "/carosal-image/63634d98de3ee_swiss_re_2013_logo.svg__1_.png"},
  { title: "Card 18", imageUrl: "/carosal-image/5c7d1507d36da_New_Project__1_.png"},
  { title: "Card 19", imageUrl:"/carosal-image/607e6ca5ed02c_hul.png" },
  { title: "Card 20", imageUrl: "/carosal-image/flip.png"},
  { title: "Card 21", imageUrl: "/carosal-image/5c7d0d3c318e3_Airtel.png" },
  { title: "Card 22", imageUrl: "/carosal-image/loreal.png" },
  { title: "Card 23", imageUrl: "/carosal-image/flip.png" },
  { title: "Card 24", imageUrl: "/carosal-image/optum.png" },
  { title: "Card 25", imageUrl: "/carosal-image/5e895eb520e7b_hero_motocorp.png" },
  { title: "Card 26", imageUrl: "/carosal-image/610122226d364_Welspun_Logo.png" },
  { title: "Card 27", imageUrl: "/carosal-image/6373373a88a47_screenshot_2022-11-15_at_12.21.42_pm.png" },
  { title: "Card 28", imageUrl: "/carosal-image/loreal.png" },
  { title: "Card 29", imageUrl: "/carosal-image/ic.png"},
  { title: "Card 30", imageUrl: "/carosal-image/ac.png"},
  { title: "Card 31", imageUrl:"/carosal-image/607e6ca5ed02c_hul.png" },
  { title: "Card 32", imageUrl: "/carosal-image/60ad0f7d5e8a5_unnamed.png"},
  { title: "Card 33", imageUrl: "/carosal-image/5c7d0d3c318e3_Airtel.png" },
  { title: "Card 34", imageUrl: "/carosal-image/loreal.png" },
  { title: "Card 35", imageUrl: "/carosal-image/loreal.png" },

 ];
function Slider() {

  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((currentCard +1) % 10);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentCard]);
  return (
    <div className='slider'>
      <div className='slider-data'>
        <p className='ip1'>Industry veterans</p>
        <p className='ip2'>trust us:</p>
      </div>
    <div className='container1'>
    <div style={{ display: "flex", overflowX: "hidden" }}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            marginRight: "10px",
            height:"100px",
            transform: `translateX(-${currentCard * 250}px)`,
            transition: "transform 1s",
            // marginRight: "30px"
          }}
        >
         
          <img src={card.imageUrl} alt="Carousel Image" />
        </div>
      ))}
    </div>
    </div>
           
    </div>
    
  )
}

export default Slider