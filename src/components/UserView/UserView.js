import React from 'react'
import imgUser1 from '../../img/user1.jpg'
import './UserView.css'

const UserView = () => {
  return (
    <div className='contenedor '>
        <button className='btn user-menu d-flex align-items-center justify-content-center mx-1'>
        <img  className='user-pic' src={imgUser1}alt='user1'></img>

        <i className="fa-sharp fa-solid fa-caret-down mx-2"></i>
        </button>
    </div>
  )
}

export default UserView