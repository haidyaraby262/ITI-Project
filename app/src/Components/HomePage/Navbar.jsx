import './Navbar.css'
import Logo from "/src/assets/logo.svg";
import Chart from "/src/assets/chart.svg";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <div className="top-bar">
        <p>🚚 Free Shipping on orders over $50 | Use code <span>SAVE10</span> for 10% off</p>
    </div>
    <nav className='navbar'>
        <div className="logo">
          <img src={Logo} alt="ShopMate Logo" className="logo-img"/>
          <span className="logo-text">ShopMate</span>

        </div>

        
          <ul className='nav-links'>
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#deals">Deals</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        
        <Link to="/cart" className="cart-container">
              <img src={Chart} alt="cart" className="cartlogo" />
                    <span className="badge">3</span>
        </Link>

    </nav>

    </>
  )
}

export default Navbar