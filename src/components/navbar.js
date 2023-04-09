import React from 'react'
import * as FaIcons from "react-icons/ai";
function navbar() {
  return (
    <>
    <div className="navbar">
     //may need to delete this icon below
     <Link to="#" className='menu-bars'>
        <FaIcons.FaBars/>
     </Link>
    </div>
    </>
  )
}

export default navbar