
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import ProdConteiner from './components/ProdConteiner/ProdConteiner';
import ProdDetailConteiner from './components/ProdDetailConteiner/ProdDetailConteiner';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route path='/' element={<ProdConteiner />}/>
          <Route path='category/:categoryId' element={<ProdConteiner />}/>
          <Route path='prod/:prodId' element= {<ProdDetailConteiner />}/>        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
