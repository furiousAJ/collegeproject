import React, { useEffect, useState } from 'react';
import './addcategory.scss'
import { Button, TextField, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CategoryView from './Categoryview';
import Adminsidebar from '../Adminhome/Adminsidebar';
import Adminnav from '../Adminhome/Adminnav';
import baseUrl from '../../../Api';

const Addcategory = (props) => {
  const [inputs, setInputs] = useState({
    Categoryname: '',
    Status: 'Active'
  });
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

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
    setLoading(true); // Set loading to true on form submission

    if (props.method === 'post') {
      axios.post(baseUrl+"/category/categorynew", inputs)
        .then((response) => {
          alert('Record Saved');
          navigate('/admincategoryall');
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false); // Reset loading state after submission completes
        });
    }
  };

  return (
    <div className='addcategory'>
      <Adminsidebar />
      <div className='addcategoryContainer'>
        <Adminnav />
        <div className="addcategorytop">
          <div className="addcategoryleft">
            <h1 className="addcategorytitle">Category</h1>
            <TextField id="Categoryname" label="Category Name" type="text" name='Categoryname' value={inputs.Categoryname} onChange={inputHandler}/>
            <br /><br />
            &nbsp;&nbsp;Status<br />
            <select className='statusboc' name="Status" value={inputs.Status} onChange={inputHandler}><br/>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <br /><br />
            <div className='button'>
              {loading ? (
                <CircularProgress /> // Show loading indicator while submitting
              ) : (
                <Button variant='contained' color='secondary' onClick={addHandler}>ADD</Button>
              )}
            </div>
          </div>
        </div>
        <div className="addcategorybottom">
          <h1 className="addcategorytitle">Recently Added Category</h1>
          <CategoryView/>
        </div>
      </div>
    </div>
  );
};

export default Addcategory;
