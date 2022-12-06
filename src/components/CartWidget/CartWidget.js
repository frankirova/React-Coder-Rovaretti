import React from 'react'
import { useState } from 'react'
import './CartWidget.css'

const CartWidget = () => {
  const [count, setCount] = useState(0)


  const increment = ()=> {
    setCount(count +1 );
  }

  return (
    <button onClick={()=> increment()} className='cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center'>
        <i className="fa-sharp fa-solid fa-cart-shopping p-1"></i>
        <span>{count}</span>
    </button>
  )
}

export default CartWidget