import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../App'
import './CartWidget.css'

const CartWidget = () => {

  const { cart } = useContext(CartContext)

  return (
    <button className='cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center'>
        <i className="fa-sharp fa-solid fa-cart-shopping p-1"></i>
        <span>{cart.length}</span>
    </button>
  
  )
}

export default CartWidget