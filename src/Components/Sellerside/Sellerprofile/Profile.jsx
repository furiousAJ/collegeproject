import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.scss';
import Sellersidebar from '../Sellerhome/Sellersidebar';
import Sellernavbar from '../Sellerhome/Sellernavbar';
import Chart from '../Sellerhome/Chart';

import baseUrl from '../../../Api'; // Assuming you have the baseUrl imported
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null); // Initialize profile state as null
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`${baseUrl}/Seller/profileview/${id}`)
      .then(response => {
        console.log(response.data);
        setProfile(response.data); // Set profile to the received data
      })
      .catch(err => console.log(err));
  }, [id]); // Add id as a dependency to fetch data when id changes
  
  const printDataToConsole = () => {
    console.log(profile);
  };
  
  return (
    <div className='single'>
      <Sellersidebar/>
      <div className='singleContainer'>
        <Sellernavbar/>
        <div className="top">
          <div className="left">
            <div className="editbutton">Edit</div>
            <h1 className="title">Information</h1>
            {profile !== null && ( // Check if profile is not null before rendering
              <div className="details">
                <h1 className="itemTitle">{profile.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email</span>
                  <span className="itemValue">{profile.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">{profile.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address</span>
                  <span className="itemValue">{profile.address}</span>
                </div>
              </div>
            )}
          </div>
          <div className="right">
            <Chart aspect={3/1} title=" Last Transactions "/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Recently Joined</h1>
          
        </div>
      </div>
    </div>
  );
}

export default Profile;
