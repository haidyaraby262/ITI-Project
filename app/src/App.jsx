
import HomePage from './Components/HomePage/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from "./Components/Cartpage/Cart";
import ProductPage from "./Components/Product page/Product";
import Payment from "./Components/Payment/Payment";
import Navbar from './Components/HomePage/Navbar'; 
function App() {


  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      
    </BrowserRouter>
     
    </>
  )
}

export default App
