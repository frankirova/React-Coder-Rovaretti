import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartList from '../CartList/CartList'
const CartConteiner = () => {



    const { cart } = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <h1>My Cart</h1>
            <div>
                <CartList />
            </div>
        </div>
)}

export default CartConteiner

