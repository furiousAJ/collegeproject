import React from 'react'
import './adminav.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListIcon from '@mui/icons-material/List';

const Adminnav = () => {
  return (
    <div className='adminnavbar'>
    <div className="adminwrapper">
      <div className="adminsearch">
        <input type="text" placeholder="search..." /><SearchIcon/>
      </div>
      
      
        
   
    </div>
  </div>
  )
}

export default Adminnav
