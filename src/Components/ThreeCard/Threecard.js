import React, { useState } from 'react'
import "./Threecard.css"


function Threecard() {
  const[data,setData]=useState([
    {id:"1",img1:"images/learn-bg-new.png",color:"#154177",text:"Learn"},
    {id:"2",img1:"images/practice-bg-new.png",color:"#9c69a3",text:"Practice"},
    {id:"3",img1:"images/mentorships-bg-new.png",color:"#966d00",text:"Mentorship"}
  ])
  const[data2,setData2]=useState([
    {id:"1",img1:"images/bob2.png",color:"#61180c",text:"Open to",text2:"College Student"},
    {id:"2",img1:"images/bob1.png",color:"#685200",text:"Open to",text2:"Working Profession"},
    {id:"3",img1:"images/bob3.png",color:"#1c4980",text:"With",text2:"Team Participation"},
    {id:"4",img1:"images/bob4.png",color:"#61180c",text:"With",text2:"Individual Partition"}
  ])
  const[data3,setData3]=useState([
    {id:"1",img1:"images/job.png",color:"#1c4980",text1:"Full Time",text2:"Jobs"},
    {id:"2",img1:"images/internship.png",color:"#1c4980",text1:"Part Time",text2:"Internships"},
    {id:"3",img1:"images/hiring-challenges.png",color:"#61180c",text1:"Hiring",text2:"Challenge"},
    {id:"4",img1:"images/paid-internship.png",color:"#1c4980",text1:"Paid",text2:"Internships"}
  ])
  console.log(data);
  return (
    <>
    <div className='threecard'>

      {data.map(item1=>(
         <>
         <div className='three-images' style={{ backgroundImage: `url(${item1.img1})` }}>
          <div className='image-text' style={{color:`${item1.color}`}}>{item1.text}</div>
         </div>
         </>
      ))}
    </div>

    <div className='fourcard'>
      <h2 className='ex-text1'>Explore Opportunities</h2>
      <p className='ex-text2'>Participate, Showcase Skills & Gain CV Points through online & offline opportunities of your interest & make your mark!</p>
      <div className='wrapper'>
      {data2.map(item=>(
        <div className='four-images' style={{ backgroundImage: `url(${item.img1})` }}>
          <div className='four-text1' style={{color:`${item.color}`}}>{item.text}</div>
          <div className='four-text2' style={{color:`${item.color}`}}>{item.text2}</div>
        </div>
      ))

      }
      </div>
    </div>


    <div className='hired'>
      <h2>Get Hired</h2>
      <p>Work with your dream companies by applying to hiring challenges and full-time & part-time jobs/internships.</p>
      <div className='wrapper2'>
        {data3.map(item=>(
          <div className='four-images' style={{ backgroundImage: `url(${item.img1})` }}>
          <div className='four-text1' style={{color:`${item.color}`}}>{item.text1}</div>
          <div className='four-text2' style={{color:`${item.color}`}}>{item.text2}</div>
        </div>
        ))}
      </div>

    </div>
    </>
  )
}

export default Threecard