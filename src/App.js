import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import CartWidget from './components/CartWidget/CartWidget.jsx';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">

        <NavBar>
          
        </NavBar>

        <CartWidget></CartWidget>

        <ItemListContainer greeting='Bienvenidos a la tienda de Paco Rabanne'/>
       
        

       
      </header>
    </div>
  );
}

export default App;
