import React from 'react'
import "./Connecting.css"
import { useState } from 'react'
import Card from './Card'

function Connecting() {

    const[data,setData]=useState([
        {id:"1",name:"Learn"
        ,topImage:"images/home-hero-learn.png",color:"#6cbof9"},
        {id:"2",name:"Practice"
        ,topImage:"images/home-hero-practice.png",color:"#aa88f5"},
        {id:"3",name:"Mentorships"
        ,topImage:"images/home-hero-mentorships.png",color:"#f2c034"},
        {id:"4",name:"Compete"
        ,topImage:"images/home-hero-compete.png",color:"#a7edfe"},
        {id:"5",name:"Jobs"
        ,topImage:"images/home-hero-jobs.png",color:"#7273de"},
        {id:"6",name:"Blogs"
        ,topImage:"images/home-hero-blogs.png",color:"#ec9103"},
        
    ])

  return (
    <div className='page1'>
        <div className='connection'>
        <div>
            <h1 className='conect'>Connecting</h1>
            <h1 className='talent'>Talent, Colleges, Recruiter</h1>
        </div>
        <div className='yello-border'></div>
        <p className='para1'>Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company.</p>

        </div>
        
        <div className='cards'>
            {
        data.map(anime=>(
        <>
        <Card key={anime.id} anime={anime}/>
        </>
        ))
        }
        </div>
    </div>
  )
}

export default Connecting