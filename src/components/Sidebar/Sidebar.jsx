import React from 'react'
import {BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle } from 'react-icons/bi'
import "../../styles/Sidebar/sidebar.css"

const Sidebar = () => {
  return (
    <div className='menu'>
        <div className='logo'>
            <BiBookAlt className='logo-icon'/>
            <h2>TeotokosMotos</h2>
        </div>

        <div className="menu--list">
            <a href="#" className="items">
                <BiHome className='icon'/>
                Dashboard
            </a>
            <a href="#" className="items">
                <BiTask className='icon'/>
                asignament
            </a>
            <a href="#" className="items">
                <BiSolidReport className='icon'/>
                Report
            </a>
            <a href="#" className="items">
                <BiStats className='icon'/>
                Stats
            </a>
            <a href="#" className="items">
                <BiMessage className='icon'/>
                Mensaje
            </a>
            <a href="#" className="items">
                <BiHelpCircle className='icon'/>
                Help
            </a>
        </div>
    </div>
  )
}

export default Sidebar
