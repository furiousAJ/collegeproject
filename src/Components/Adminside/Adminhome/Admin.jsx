import React from 'react'

import './admin.scss'
import Adminsidebar from './Adminsidebar'
import Adminnav from './Adminnav'



const Admin = () => {
  return (
    <div className='adminhome'>
    <Adminsidebar/>
    <div className="adminhomeContainer">
      <Adminnav/> 
     
      
      
    </div>
  </div>
  )
}

export default Admin
