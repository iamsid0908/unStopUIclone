import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded';
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
function Header() {
  return (
    <div className='nav'>
        <div className='left'>
            <div className='unstop-logo'></div>
            <div className='border-bar'></div>
            <div className='formely'>
                <p className='p1'>Formely</p>
                <p className='p2'> Dare2Compete</p>
            </div>
            <div className='search-bar'> <SearchIcon sx={{ fontSize: 18,color:'#163a66'  }}/><input type="text" placeholder='Search Oportinuty'></input></div>
        </div>


        <div className='right'>
          <div className='nav-items'>
          <div className='learn-con'>
            <div className='learn-icon'>
            <LocalLibraryOutlinedIcon sx={{ fontSize: 24,color:'#163a66'  }}/>
            <LocalLibraryRoundedIcon sx={{ fontSize: 24,color:'#0073e6'  }}/>
            </div>
          
          </div>
          <p className='nav-itemsName'>Learn</p>
          </div>
          
          <div className='nav-items'>
          <div className='learn-con'>
            <div className='learn-icon'>
            <TrackChangesIcon sx={{ fontSize: 24,color:'#163a66'  }}/>
            <CrisisAlertRoundedIcon sx={{ fontSize: 24,color:'#0073e6'  }}/>
            </div>
          
          </div>
          <p className='nav-itemsName'>Practise</p>
          </div>
         
          <div className='nav-items'>
          <div className='learn-con'>
            <div className='learn-icon'>
            <BarChartOutlinedIcon sx={{ fontSize: 24,color:'#163a66'  }}/>
            <BarChartOutlinedIcon sx={{ fontSize: 24,color:'#0073e6'  }}/>
            </div>
          
          </div>
          <p className='nav-itemsName'>Compete</p>
          </div>

          <div className='nav-items'>
          <div className='learn-con'>
            <div className='learn-icon'>
            <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 24,color:'#163a66'  }}/>
            <TipsAndUpdatesRoundedIcon sx={{ fontSize: 24,color:'#0073e6'  }}/>
            </div>
          
          </div>
          <p className='nav-itemsName'>Mentorship</p>
          </div>


          <div className='nav-items'>
          <div className='learn-con'>
            <div className='learn-icon'>
            <BusinessCenterOutlinedIcon sx={{ fontSize: 24,color:'#163a66'  }}/>
            <BusinessCenterIcon sx={{ fontSize: 24,color:'#0073e6'  }}/>
            </div>
          
          </div>
          <p className='nav-itemsName'>Jobs</p>
          </div>
          
          <button className='host-btn'> <BusinessCenterIcon/>Host</button>
          <NotificationsIcon sx={{ fontSize: 24,color:'#163a66'  }}/>
          <DialpadOutlinedIcon sx={{ fontSize: 24,color:'#163a66'  }}/>
        </div>
    </div>
  )
}

export default Header