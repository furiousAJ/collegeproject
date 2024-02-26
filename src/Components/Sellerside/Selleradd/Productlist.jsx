import React, { useEffect } from 'react'
import './productlist.scss'
import Sellersidebar from '../Sellerhome/Sellersidebar'


import Sellernavbar from '../Sellerhome/Sellernavbar'
import Productview from './Productview'
import { useNavigate } from 'react-router-dom'

const Productlist = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the presence of the token in localStorage or wherever you store it
    const token = localStorage.getItem('token');
    console.log('token',token);
    if (!token) {
      // Token is not present, navigate to the login page
      navigate('/sellerlogin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className='list'>
      <Sellersidebar/>
      <div className="listContainer">
        <Sellernavbar/>
        <h2 className='viewh2'>Product View</h2><br></br>
        <Productview/>
      </div>
    </div>
  )
}

export default Productlist