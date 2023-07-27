//import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  
  
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar></NavBar>
        </header>
        <Routes>
          <Route path="/products" element={<ItemListContainer greeting='Bienvenidos a la tienda de Paco Rabanne'/>}/>
          <Route path="/category/:categoryId" element={ <ItemListContainer/> } />
          <Route path="/product/:id" element={ <ItemDetailContainer/> }/>
          <Route path="/home" element={<h1>Página principal</h1>} />
          <Route path="/femme" element={<h1>Fragancias femeninas</h1>} />
          <Route path="/men" element={<h1>Fragancias masculinas</h1>} />
          <Route path="/unisex" element={<h1>Fragancias unisex</h1>} />
        
          <Route path="*" element= {<h1>Page not found: 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
