import './CartList.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import React from 'react'
const CartList = () => {
    const { cart, getTotal, removeItem } = useContext(CartContext)
    const total = getTotal()
    return (
        <div>
            {
                cart.map(prod => (

                    <div key={prod.id}>
                        <div className='item'>
                            <img className="carrito-img" src={prod.img} alt={prod.marca}></img>
                            <p className="card-text">{prod.marca}</p>
                            <p className="card-text">Cantidad: <span id="cantidad">{prod.quantity}</span></p>
                            <button className='btn btn-success' onClick={()=>{removeItem(prod.id)}}>
                                X
                            </button>
                        </div> 
                        <div>
                            
                        </div>             
                        
                    </div>
                ))
            }
            <h3 className='m-2'>Total: ${total}</h3>
        </div>
    )
}

export default CartList