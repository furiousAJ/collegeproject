
import {  Button, CircularProgress, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

import baseUrl from '../../../Api';
import Categoryview from './Categoryview';


const Categoryedit = (props) => {
    var[category,setCategory] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);
    var [inputs,setInputs]=useState(props.data)
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(()=>{
        axios.get(baseUrl + "/category/categoryview")
        .then(response =>{
            console.log(response.data)
            setCategory(response.data)
        })
        .catch(err=>console.log(err))
    },[])



   

const updatevalues =(value)=>{
    console.log("updated",value);
    setSelected(value);
    setUpdate(true);
    }

    const inputHandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }

    const savedata =()=>{
      
        if(props.method ==='put'){
          
            axios.put(baseUrl+"/category/cedit/"+inputs._id,inputs)
            .then((response)=>{
                alert("Updated")
                window.location.reload(false)
              })
              .catch(err=>console.log(err))
        }
    }
    
  return (
    
      
      <div className='addcategory'>
      
      <div className='addcategoryContainer'>
    
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
                <Button variant='contained' color='secondary' onClick={savedata}>Submit</Button>
              )}
            </div>
          </div>
        </div>
        <div className="adminaddcategorybottom">
          <h1 className="addcategorytitle">Recently Added Category</h1>
          <Categoryview/>
        </div></div>
        </div>
        
      
    
    
    );
        
      
        }

export default Categoryedit




