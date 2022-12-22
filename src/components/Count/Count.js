import React from 'react'
import { useState,useContext } from 'react'
import { CartContext } from '../../App'
import { getProdById } from '../../asyncmock'



const Count = ({ prodById, stock }) => {
  const [count, setCount] = useState(1)

  const { addToCart } = useContext(CartContext)

  const increment = () => {
    if (count < stock){
    setCount(count + 1)
    }
    
  }
  const decrement = () => {

    if(count > 1){
    setCount(count - 1);
    }
  }

  return(
    <section className='botones-product-detail d-flex'>

      {/* <button onClick={ () => addToCart(count)} className='cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center w-100'>
        Add to cart
      </button> */}


      <button onClick={ () => {addToCart(prodById)}} className='cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center w-100'>
        Add to cart
      </button>

      <div className='count'>
        <button onClick={() => increment()} className='m-4 btn btn-success'>
          +
        </button>

        <span>{count}</span>

        <button onClick={() => decrement()} className='m-4 btn btn-success'>
          -
        </button>
      </div>

    </section>
  )
}

export default Count