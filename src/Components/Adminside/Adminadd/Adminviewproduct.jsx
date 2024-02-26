import React from 'react'
import Adminsidebar from '../Adminhome/Adminsidebar'
import Adminnav from '../Adminhome/Adminnav'
import './adminviewproduct.scss'
import Productview from '../../Sellerside/Selleradd/Productview'


const Adminviewproduct = () => {
  return (
    <div className='adminprolist'>
      <Adminsidebar/>
      <div className="adminprolistContainer">
        <Adminnav/>
        <div>
          <h2 className='adhead'> Product View</h2>
        <Productview/>
        </div>
      </div>
    </div>
  )
}

export default Adminviewproduct
