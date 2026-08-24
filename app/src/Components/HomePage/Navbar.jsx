import './Navbar.css'
import { useState } from 'react';
import Logo from "/src/assets/logo.svg";
import Chart from "/src/assets/chart.svg";
import { Link } from 'react-router-dom';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>

    <nav className='navbar'>
        <div className="logo">
          <img src={Logo} alt="ShopMate Logo" className="logo-img"/>
          <span className="logo-text">ShopMate</span>

        </div>

        
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li className="active"><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#shop" onClick={closeMenu}>Shop</a></li>
            <li><a href="#categories" onClick={closeMenu}>Categories</a></li>
            <li><a href="#deals" onClick={closeMenu}>Deals</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
          </ul>

        <div className="navbar-right">
          <Link to="/cart" className="cart-container" onClick={closeMenu}>
                <img src={Chart} alt="cart" className="cartlogo" />
                      <span className="badge">3</span>
          </Link>

          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

    </nav>

    </>
  )
}

export default Navbar