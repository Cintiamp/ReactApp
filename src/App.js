//import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 

function App() {
  

  return (
    <div className="App">
      <header className="App-header">

        <NavBar></NavBar>

        

        <ItemListContainer greeting='Bienvenidos a la tienda de Paco Rabanne'/>
       
        

       
      </header>
    </div>
  );
}

export default App;
