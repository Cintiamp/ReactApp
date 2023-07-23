//import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>

        <ItemListContainer greeting='Bienvenidos a la tienda de Paco Rabanne'/>
       
        <ItemDetailContainer></ItemDetailContainer> 

    </div>
  );
}

export default App;
