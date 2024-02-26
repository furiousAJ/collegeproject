import React from 'react'
import './adminsidebar.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { LuView } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";

const Adminsidebar = () => {
  return (
    <div className='adminsidebar'>
    <div className="admintop">Admin</div>
<hr/>
    <div className="admincenter">
      <ul>
          <p className="admintitle">MAIN</p>
          
        
          
          
          <li>
              
              <AccountCircleOutlinedIcon className='adminicon'/>
              <span>Profile</span>
          </li>
        
          
          <li><Link to="/adminallproduct" style={{textDecoration:"none"}}>
              <StoreIcon className='adminicon'/>
              <span>Products View</span></Link>
          </li>
          
          
          <li>
              
              <PersonOutlineOutlinedIcon className='adminicon'/>
              <span>Users</span>
          </li>
          
          <li><Link to="/category" style={{textDecoration:"none"}}>
              <TbCategoryPlus  className='adminicon'/>              
              <span>Category Add</span></Link>
          </li>
         
          <li><Link to="/admincategoryall" style={{textDecoration:"none"}}>
              <LuView className='adminicon'/>
             <span>View Category </span></Link>
          </li>
          <li> <NotificationsNoneIcon className='adminicon'/>
              <span>Notification</span>
          </li>
         

          <li><Link to="/admincategoryall" style={{textDecoration:"none"}}>
              <LogoutOutlinedIcon className='adminicon'/>
              <span>Logout</span>
              </Link>
          </li>
      </ul>
    </div>
 
  </div>
  )
}

export default Adminsidebar
