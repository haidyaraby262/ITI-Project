import Herophoto from '../../assets/hero section.jpeg'
import  './Herostyle.css'
function Hero() {
  return (
    <>
    <header className="hero-section">

      <div className="hero-content">
        <div className="badges">
            <span className="badge-dot"></span> NEW ARRIVALS
          </div>

        <h1 className="hero-title">Discover The Best 
          <span className="highlight-text">Products</span> for you
        </h1>

        <p className="hero-description">
            Explore our wide range of high-quality products at<br />
            affordable prices. Shop now and enjoy the best deals!
          </p>



          <div className="hero-actions">
            <button className="btn btn-primary">Shop Now &rarr;</button>
            <button className="btn btn-secondary">Explore Deals</button>
          </div>


          <div className="social-proof">
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/40?img=1" alt="User 1" />
              <img src="https://i.pravatar.cc/40?img=2" alt="User 2" />
              <img src="https://i.pravatar.cc/40?img=3" alt="User 3" />
            </div>
            <p className="social-text">
              <strong>Trusted by 10,000+</strong> Happy Customers
            </p>
          </div>
        </div>


      <div className="hero-image-wrapper">
          <div className="circle-bg">
            <img 
              src={Herophoto} 
              alt="Backpack" 
              className="main-image" 
            />
          </div>
          
          <div className="floating-badge discount-badge">
            <strong>50%</strong>
            <span>OFF Today</span>
          </div>

          <div className="floating-badge product-card">
            <div className="headphone-icon">🎧</div>
            <div className="product-info">
              <h4>Wireless Headphones</h4>
              <p>$59.99 — Best Seller</p>
            </div>
          </div>
        </div>

    </header>
    
    </>
  )
}

export default Hero