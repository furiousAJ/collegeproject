import React, { useEffect, useState } from 'react';
import './newsletter.scss';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Button, TextField } from '@mui/material';
import baseUrl from '../../../Api'; // Ensure baseUrl is imported correctly
import axios from 'axios';

const Newsletter = (props) => {
  const [inputs, setInputs] = useState({
    Email: '',
  });

  useEffect(() => {
    if (props.method === 'put' && props.data) {
      setInputs(props.data);
    }
  }, [props.method, props.data]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const addHandler = () => {
    if (props.method === 'post') {
      console.log("Email to be sent:", inputs.Email);
      axios.post(baseUrl+"/email/emailnew", inputs)
     
        .then((response) => {
          console.log("Response:", response.data);
          alert('Record Saved');
        })
        .catch((err) => console.log(err))
    }
  };

  return (
    <div className='newsLetterBanner'>
      <SendOutlinedIcon />
      <TextField 
        type='email'
        name='Email'
        placeholder='Your email address'
        value={inputs.Email}
        onChange={inputHandler}
      />
      <Button className='bg-g' onClick={addHandler}>Subscribe</Button>
    </div>
  );
}

export default Newsletter;
