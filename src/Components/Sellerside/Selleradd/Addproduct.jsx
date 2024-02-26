import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, FormControl, Box, CircularProgress } from '@mui/material';

import './addproduct.scss';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../Api';
import Sellersidebar from '../Sellerhome/Sellersidebar';
import Sellernavbar from '../Sellerhome/Sellernavbar';

const Addproduct = (props) => {
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token', token);
    if (!token) {
      // Redirect to the login page
      window.location.href = '/sellerlogin';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means it only runs once when the component mounts

  const [category, setCategory] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading indicator

  const [inputs, setInputs] = useState({
    Productname: '',
    Productprice: '',
    Quantity: '',
    Cid: '',
    Status: 'Active',
    Description: '',
    Photo: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (props.method === 'put' && props.data) {
      setInputs(props.data);
    }
  }, [props.method, props.data]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const addHandler = () => {
    setLoading(true); // Set loading to true when submitting form
    const formData = new FormData();
    formData.append('Productname', inputs.Productname);
    formData.append('Productprice', inputs.Productprice);
    formData.append('Quantity', inputs.Quantity);
    formData.append('Cid', inputs.Cid);
    formData.append('Status', inputs.Status);
    formData.append('Description', inputs.Description);
    formData.append('Photo', selectedImage);
  
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    axios
      .post(baseUrl + '/product/productnew', formData, {
        headers: {
          'Authorization': token,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        setLoading(false); // Set loading to false after response
        alert('Record saved');
        navigate('/products');
      })
      .catch((err) => {
        setLoading(false); // Set loading to false if there's an error
        console.log('Error', err);
      });
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  useEffect(() => {
    axios
      .get(baseUrl + '/category/categoryview')
      .then((response) => {
        setCategory(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="new">
      <Sellersidebar />
      <div className="newContainer">
        <Sellernavbar />
        <div className="top">
          <h1>Add product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://i.ibb.co/KW8tBB8/img1.jpg'}
              alt="Not Found"
              className="imgupload"
            />
          </div>

          <div className="right">
            <div className="alignform">
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1.6, width: '29ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="filephoto">
                  <label htmlFor="file">Image: </label>
                  <input type="file" className="icon" onChange={handleImage} />
                  <br />
                  <br />
                  Product Name:
                  <TextField
                    id="productname"
                    label="eg:Apple"
                    type="text"
                    name="Productname"
                    value={inputs.Productname}
                    onChange={inputHandler}
                  />
                  <br></br>
                  Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <TextField
                    id="Price"
                    label="eg:260"
                    type="number"
                    name="Productprice"
                    value={inputs.Productprice}
                    onChange={inputHandler}
                  />
                  <br></br>
                  Quantity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <TextField
                    id="Quantity"
                    label="Quantity Kg / Lr"
                    type="number"
                    name="Quantity"
                    value={inputs.Quantity}
                    onChange={inputHandler}
                  />
               
                  <br></br>
                  Category:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FormControl sx={{ m: 1, width: '25ch' }}>
                    <select
                      className="boxcategory"
                      name="Cid"
                      value={inputs.Cid}
                      onChange={inputHandler}
                    >
                      {category.map((value, index) => {
                        return (
                          <option key={index} value={value._id}>
                            {value.Categoryname}
                          </option>
                        );
                      })}
                    </select>
                    <br></br>
                  </FormControl>
                  <br></br>
                  Description:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <TextField
                    id="Description"
                    label="Three ore four word"
                    type="text"
                    name="Description"
                    value={inputs.Description}
                    onChange={inputHandler}
                  />
                  <br></br>
                  Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <select className="boxact" name="Status" value={inputs.Status} onChange={inputHandler}>
                    <option value="Active">Active</option>
                    <option value="InActive">InActive</option>
                  </select>
                  <br />
                  <br />

                  <div className="button">
                    <Button variant="contained" color="success" onClick={addHandler}>
                      {loading ? <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                    
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;