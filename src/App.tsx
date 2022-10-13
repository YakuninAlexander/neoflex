import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CartContext } from './Contexts/CartContext';
import IGoodProps from './data/interfaces/IGoodProps';
import Cart from './pages/Cart';
import MainPage from './pages/MainPage';


function App() {
  const [cart, setCart] = useState<IGoodProps[]>([])
  return(
    <div>
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<MainPage />}> </Route>
          <Route path="/Cart" element={<Cart />}> </Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  </div>
  );
}

export default App;