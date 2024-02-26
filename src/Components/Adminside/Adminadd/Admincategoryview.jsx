import React from 'react'
import './admincategoryview.scss'
import Adminsidebar from '../Adminhome/Adminsidebar'
import CategoryView from './Categoryview'
import Adminnav from '../Adminhome/Adminnav'

const Admincategoryview = () => {
  return (
    <div className='admincatprolist'>
      <Adminsidebar/>
      <div className="admincatprolistContainer">
        <Adminnav/>
        <div className='admincatprotop'>
        <CategoryView/>
        </div>
      </div>
    </div>
  )
}

export default Admincategoryview
