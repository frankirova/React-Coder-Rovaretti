import { createContext, useState } from 'react';

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (prodToAdd) => {
    if (!isInCart(prodToAdd.id)) {
      console.log(prodToAdd)
      setCart([...cart, prodToAdd])
    }
  }

  const isInCart = (id) => {
    return (cart.some(product => product.id === id))

  }

  const getQuantity = () => {
    let acc = 0

    cart.forEach(prod => {
      acc += prod.quantity
    })

    return  acc 
  }

  const getTotal = () => {
    let acc = 0
    cart.forEach(prod => {
      acc += prod.quantity*prod.precio
    })

    return  acc 
  }

  const removeItem = (id)=>{
    const updateCart = cart.filter(prod => prod.id !== id)
    setCart(updateCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, isInCart, getQuantity, getTotal, removeItem, clearCart }}>
      { children }
    </CartContext.Provider>
  )
}