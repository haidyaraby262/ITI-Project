
import HomePage from './Components/HomePage/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from "./Components/Cartpage/Cart";
import ProductPage from "./Components/Product page/Product";
import Payment from "./Components/Payment/Payment";
import Navbar from './Components/HomePage/Navbar'; 
import Bestproduct from './Components/HomePage/Bestproduct'
import { CartProvider } from './Components/Cartpage/CartContext'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <>
    <CartProvider>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/best-product" element={<Bestproduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      
    </BrowserRouter>
    </CartProvider>
     
    </>
  )
}

export default App
