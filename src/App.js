//import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import { _exportProductsWithBatch } from './services/firebase';
import Checkout from './components/Checkout/Checkout';


function App() {
  _exportProductsWithBatch()

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar></NavBar>
          </header>
          <main>
          <Routes>
            <Route path="/home" element={<ItemListContainer greeting='Bienvenidos a la tienda de Paco Rabanne' />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/home" element={<h1>Página principal</h1>} />
            <Route path="/femme" element={<h1>Fragancias femeninas</h1>} />
            <Route path="/men" element={<h1>Fragancias masculinas</h1>} />
            <Route path="/unisex" element={<h1>Fragancias unisex</h1>} />
            <Route path='/cart' element={ <CartContainer/> }></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path="*" element={<h1>Page not found: 404</h1>} />
          </Routes>
          </main> 
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
