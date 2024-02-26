import React, { useEffect } from 'react'
import Flexdraw from './Flexdraw'
import Slidebar from './Slidebar'
import './flexslide.scss'
import Footer from '../Userfooter/Footer'
import Midpart from '../Userfooter/Midpart'
import Minfooter from '../Userfooter/Minfooter'
import { useNavigate } from 'react-router-dom'

const Flexslide = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the presence of the token in localStorage or wherever you store it
    const token = localStorage.getItem('token');
    console.log('token',token);
    if (!token) {
      // Token is not present, navigate to the login page
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className='midall'>
      
      <Flexdraw/><br></br>
      
      <div className='alignflexbox'>
      <Slidebar/></div><br></br>
      <h2 className='hd'>Featured Categories</h2>
      <div className='homefooterbottom'>
      
        <div className='usermid'>
        <Midpart/>
        </div>
      </div><div>
      <Minfooter/>
      <Footer/>
      </div>
     
    </div>
  )
}

export default Flexslide