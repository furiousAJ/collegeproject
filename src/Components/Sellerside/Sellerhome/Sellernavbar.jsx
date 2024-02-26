import React, { useContext } from 'react'
import "./sellernavbar.scss"
import SearchIcon from '@mui/icons-material/Search';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Sellernavbar = () => {

 

  return (
    <div className='dashnavbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." /><SearchIcon/>
        </div>
    
        <div className="items">
          <AccountCircleIcon className='icon'/>
           </div>
         
     
      </div>
    </div>
  )
}

export default Sellernavbar
