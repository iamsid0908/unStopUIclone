import React, { useState } from 'react'
import "./Recent.css"
import ErrorIcon from '@mui/icons-material/Error';
function Recent() {
  const[first,setFirst]=useState(true);
  const[second,setSecond]=useState(false);
  const[third,setThird]=useState(false);
  const handle1=()=>{
    setFirst(true);
    setSecond(false);
    setThird(false);
  }
  const handle2=()=>{
    setFirst(false);
    setSecond(true);
    setThird(false);
  }
  const handle3=()=>{
    setFirst(false);
    setSecond(false);
    setThird(true);
  }
  return (
    <div className='recent'>
        <div className='three-btn'>
        <div className='recent-btn p11' id={first?"hi":""} onClick={handle1}>Recent Viewed</div>
        <div className='recent-btn p22'id={second?"hi":""}  onClick={handle2}>My Watchedlist</div>
        <div className='recent-btn p33'id={third?"hi":""}  onClick={handle3}>My Registration</div>
        </div>
       {first?
        <div className='oppo'>
            <div className='oppo-bar'></div>
            <div className='exclamation-mark'><ErrorIcon  sx={{ fontSize: 24,color:'#163a66'  }}/></div>
            <div className='sentance'>No opportunities in your </div>
        </div>: second?
       
          <div className='oppo'>
            <div className='oppo-bar'></div>
            <div className='exclamation-mark'><ErrorIcon  sx={{ fontSize: 24,color:'#163a66'  }}/></div>
            <div className='sentance'>No opportunities in your watchlist</div>
        </div> :third?

  <div className='oppo'>
  <div className='oppo-bar'></div>
  <div className='exclamation-mark'><ErrorIcon  sx={{ fontSize: 24,color:'#163a66'  }}/></div>
  <div className='sentance'>You haven’t registered in any competition.</div>
</div>:null
}

    </div>
  )
}

export default Recent