import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    function goToAdmin(){
        navigate("/admin")
    }

  return (
    <div className='navMenu'>
        <h1 className='net'>Netexpress</h1>
        <p className='home'>Home+</p>
        <p className='package'>Package+</p>
        <p className='services'>Services+</p>
        <p className='shop'>shops+</p>
        <p className='page'>Page+</p>
        <button className='admin' onClick={goToAdmin}>Admin</button>
    </div>
  )
}

export default Navbar