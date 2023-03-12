import React from 'react'
import "./Ournumbers.css"
import ShowChartIcon from '@mui/icons-material/ShowChart';
function Ournumbers() {
    
  return (
    <div className='ournum1'>
        <div className='ournum'>
        <h2 className='our'>Our</h2>
        <h2 className='number'>Numbers</h2>
        <div className='increase-bar'><ShowChartIcon/></div>
        </div>

        <div className='box'>
            <div className='box1'>
                <div className='circle'></div>
                <div className='m5'>~5Mn+</div>
                <div className='active'>Active Users</div>
            </div>
           
            <div className='box2'>
                <div className='circle2'></div>
                <div className='m110'>~110k+</div>
                <div className='opportunity'>Opportunity </div>
            </div>

            <div className='box3'>
                <div className='circle3'></div>
                <div className='m53'>~42k+</div>
                <div className='active3'>Organisation</div>
            </div>
            <div className='box4'>
                
            </div>
        </div>

        <div className='box'>
        <div className='box4'>
                
                </div>
            <div className='box1'>
                <div className='circle'></div>
                <div className='m5'>~19.1Mn+</div>
                <div className='active'>Assesment</div>
            </div>
           
            <div className='box2'>
                <div className='circle2'></div>
                <div className='m110'>500+</div>
                <div className='opportunity'>Brand Trust us </div>
            </div>

            <div className='box3'>
                <div className='circle3'></div>
                <div className='m53'>~78+</div>
                <div className='active3'>Countries</div>
            </div>
            
        </div>
    </div>
  )
}


export default Ournumbers