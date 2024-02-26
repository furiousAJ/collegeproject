import React from 'react'
import './usertab.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Usersentry = () => {
  const rows = [
    {
       
    id: 11111,
    name: "Victoria", 
    img:"https://i.ibb.co/7vvM9bd/peakpx.jpg",
    email: "victoria@gmail.com",
    date: "05 march 2023",
    type:"seller",
     mobile: "978654321",
    status:"Active",
    },
   
       
  ];
  return (
   
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>User ID</TableCell>
          <TableCell className='tableCell'>Name</TableCell>
          <TableCell className='tableCell'>Email</TableCell>
          <TableCell className='tableCell'>Date of Join</TableCell>
          <TableCell className='tableCell'>Type</TableCell>
          <TableCell className='tableCell'>Mobile NO</TableCell>
          <TableCell className='tableCell'>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}>
            <TableCell className='tableCell'> {row.id}</TableCell>
            <TableCell className='tableCell'><div className="cellWrapper">
              <img src={row.img} alt="" className="image" />
              {row.name}
              </div>
              </TableCell>
            <TableCell className='tableCell'>{row.email}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.type}</TableCell>
            <TableCell className='tableCell'>{row.mobile}</TableCell>
           
            
            <TableCell className='tableCell'>
              <span className={` status ${row.status}`}>{row.status}</span>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Usersentry
