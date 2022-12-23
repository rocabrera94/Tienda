import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ProductsList from './components/ProductsList';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div > 
        <ProductsList ></ProductsList> 
      </div>
    </div> 
  );
}

export default App;
