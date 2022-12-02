
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ProdConteiner from './components/ProdConteiner/ProdConteiner';
import ProdDetailConteiner from './components/ProdDetailConteiner/ProdDetailConteiner';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ProdConteiner />
      <ProdDetailConteiner />
      
    </div>
  );
}

export default App;
