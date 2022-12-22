
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import ProdConteiner from './components/ProdConteiner/ProdConteiner';
import ProdDetailConteiner from './components/ProdDetailConteiner/ProdDetailConteiner';
import { createContext, useState } from 'react';


export const CartContext = createContext(0)

function App() {
const [cart, setCart] = useState ([])

const addToCart = (id) => {
  if(!isInCart(id)){
    setCart([...cart, id])
  }
}

const isInCart = (id) => {
  return cart.some(cart => cart === id)
}

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, addToCart }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ProdConteiner />} />
            <Route path='category/:categoryId' element={<ProdConteiner />} />
            <Route path='prod/:prodId' element={<ProdDetailConteiner />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>

    </div>
  );
}

export default App;
