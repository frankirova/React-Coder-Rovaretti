import { CartProvider } from './Context/CartContext';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import ProdConteiner from './components/ProdConteiner/ProdConteiner';
import ProdDetailConteiner from './components/ProdDetailConteiner/ProdDetailConteiner';
import CartConteiner from './components/CartConteiner/CartConteiner';
import Chekout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ProdConteiner />} />
            <Route path='category/:categoryId' element={<ProdConteiner />} />
            <Route path='prod/:prodId' element={<ProdDetailConteiner />} />
            <Route path='cart' element={<CartConteiner />} />
            <Route path='checkout' element={<Chekout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
