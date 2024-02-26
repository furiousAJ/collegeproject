import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToggleOnTwoToneIcon from '@mui/icons-material/ToggleOnTwoTone';
import ToggleOffTwoToneIcon from '@mui/icons-material/ToggleOffTwoTone';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import baseUrl from '../../../Api';
import Categoryedit from './Categoryedit';


const CategoryView = () => {
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(baseUrl + '/category/categoryview')
      .then((response) => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteValues = (id) => {
    console.log('Inactive', id);
    axios.put(baseUrl + '/category/inactive/' + id).then((response) => {
      alert('Inactive');
      window.location.reload(false);
    });
  };

  const activeValues = (id) => {
    console.log('Active', id);
    axios.put(baseUrl + '/category/active/' + id).then((response) => {
      alert('Active');
      window.location.reload(false);
    });
  };

  const updatevalues = (value) => {
    console.log('updated', value);
    setSelected(value);
    setUpdate(true);
  };

  const columns = [
    { field: 'Categoryname', headerName: 'Category Name', width:300 },
    { field: 'Status', headerName: 'Status',width:300  ,renderCell: (params) =>(<div className={`cellWithStatus ${params.row.Status}`}>  {params.row.Status}

    </div>)},
 {
  field: 'edit',
  headerName: 'Edit',
  width: 200,
  renderCell: (params) => (
      <ModeEditOutlineIcon color='success' onClick={() => updatevalues(params.row)} />
  ),
},

    {
      field: 'Active',
      headerName: 'Active',
      width:300,
      renderCell: (params) => (
        <ToggleOnTwoToneIcon  color="primary" onClick={() => activeValues(params.row._id)} />
      ),
    },



    
    {
      field: 'Inactive',
      headerName: 'Inactive',
      width:300,
      renderCell: (params) => (
        <ToggleOffTwoToneIcon color="error" onClick={() => deleteValues(params.row._id)} />
      ),
    },
  ];

  if (update) {
    return <Categoryedit data={selected} method='put' />;
}


  // Define a function to generate a unique id for each row
  const getRowId = (row) => row._id;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Category View</h2>
      
      <DataGrid
        className="datagrid"
        rows={category}
        columns={columns}
        pageSize={5}
        getRowId={getRowId}
        style={{ fontSize:'16px' , }} // Specify the function to generate a unique id
      />
    </div>
  );
};

export default CategoryView;