import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)


    const increment = ()=> {
      setCount(count +1 );
    }
    const decrement = ()=> {
        setCount(count -1 );
      }
  
    return (
        <section className='botones-product-detail d-flex'>
            <button className='cart-widget btn btn-success mx-2 my-auto d-flex justify-content-center align-items-center w-100'>
            {/* <i className="fa-sharp fa-solid fa-cart-shopping p-1"></i> */}
            Add to cart</button>
            <div className='count'>
           <button onClick={()=> increment()} className='m-4 btn btn-success'>
            +
           </button>
            <span>{count}</span>
           <button onClick={()=> decrement()}className='m-4 btn btn-success'>
            -
           </button>
           </div>
        </section>
    )
  }

export default Count