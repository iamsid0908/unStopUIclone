import React from 'react'
import "./Fotter.css"
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
function Fotter() {
  return (
    <>
    <div className='fotter'>
        <div className='leftside'>
            <div className='child-left'>
                <div className='unlogo'></div>
                <p>Built with favorite in India for the world</p>
                <hr></hr>
                <h3>Stay Connected</h3>
                <div className='mail'>
                    <MarkunreadIcon/>
                <p className='sales'>sales@unstop.com</p>
                </div>
                <div className='mail'>
                    <SettingsPhoneIcon/>
                <p className='num'>+91-9311777388(Mon to Fri, 9 AM to 6 PM)</p>
                </div>
                <div className='icons-ele'>
                    <InstagramIcon className='ic1'/>
                    <LinkedInIcon className='ic1'/>
                    <FacebookIcon className='ic1'/>
                    <TelegramIcon className='ic1'/>
                    <TwitterIcon className='ic1'/>
                    <YouTubeIcon className='ic1'/>
                </div>
                <hr></hr>
                <h4>Stay Updated</h4>
                <p>We'll send you updates on the latest <br></br> opportunities to showcase your talent and get <br></br> hired and rewarded regularly.</p>
                <div className='fotter-input1'>
                    <input type="text" placeholder="sign up for our newsletter" className='fotter-input'/>
                    <SendIcon className='send'/>
                </div>
                <div className='two-btn'>
                <div className='share'>Share your story now</div>
                <div className='publish'>Published Opportunity</div>
                </div>
                <hr></hr>
                <h3>Download Unstop App</h3>
                
                <p>Best Viewed in Latest Versions of Edge, Mozilla,<br></br> Chrome, Opera & Safari. V: 2.22.2023.18.2</p>
                <hr></hr>
                <p className='copyright'>Copyright © 2023 FLIVE Consulting Pvt Ltd - All rights reserved.</p>
            </div>
        </div>



        <div className='rightside'>
            <div className='rightside-child'>
            <div className='our-sol'>
                <h3>Our Solution</h3>
                <ul>
                    <li>Brand</li>
                    <li>Source</li>
                    <li>Engage</li>
                    <li>Assets</li>
                    <li>Hire</li>
                </ul>

                <h3>Our Product</h3>
                <ul>
                    <li>Technology Platform</li>
                    <li>Online Recruitment Platform</li>
                    <li>Quizzing / Assessments</li>
                    <li>Online Hackathons / Codin</li>
                    <li>Business Simulation Games</li>
                </ul>
            </div>
            <div className='participate'>
                <h3>Participate</h3>
                <ul>
                    <li>Compition & Challange</li>
                    <li>Quizee</li>
                    <li>Hackathons</li>
                    <li>Workshops & Webinars</li>
                    <li>Conferences</li>
                    <li>Cultural Event</li>
                    <li>Colleges Festivals</li>
                </ul>
                <h3>Apply</h3>
                <ul>
                    <li>Internsip</li>
                    <li>jobs</li>
                    <li>Scholars</li>
                </ul>
            </div>
            <div className='learn'>
                <h3>Learn</h3>
                <ul>
                    <li>Courses</li>
                    <li>Articles</li>
                    <li>Workshops</li>
                    <li>Technopedia</li>
                </ul>
                <h3>Practice</h3>
                <ul>
                    <li>MCQ Mock test</li> 
                    <li>5 days Interview Preparation</li>
                    <li>Mock Interview</li>
                    <li>Code & Ace Hiring</li>
                    <li>100 Days of coding</li>
                </ul>
            </div>

            </div>
            <hr></hr>
            <div className='properties'>
                <h3>Our Properties</h3>
                <ul>
                    <li>Unstop Award 2023</li>
                    <li>Unstop Campuse Employer</li>
                    <li>Education Loan</li>
                    <li>Unstop Igniter Club</li>
                    <li>Online Quizzing Festivals</li>
                    <li>Online Hackathon Festival</li>
                </ul>
            </div>
        </div>
    </div>
    <div className='lastfotter'>
        <div className='img1'></div>
        <div className='img2'></div>
        <div className='img3'></div>
        <div className='img4'></div>
        <div className='img5'></div>
    </div>
    </>
  )
}

export default Fotter