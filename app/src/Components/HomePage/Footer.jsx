import Logo from '../../assets/logo.svg'
import Facebook from '../../assets/facebook.svg'
import Youtube from '../../assets/youtube.svg'
import Twitter from '../../assets/twitter.svg'
import './Footer.css' 
import { useState } from 'react';

function Footer() {
  const[email,setEmail]=useState("");
  const[subscribed,setSubscribed]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email){
      setSubscribed(true);
      setEmail("")
      setTimeout(()=>{
        setSubscribed(false)
      },2000)
    }
  }
  return (
    <footer className="site-footer">

      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logo-wrapper">
            <img src={Logo} alt="ShopMate Logo" className="footerlogo" />
            <span className="brand-name">ShopMate</span>
          </div>
          <p className="footer-desc">
            Your one-stop shop for quality products at the best prices. 
            Trusted by 10,000+ happy customers.
          </p>
          <div className="social-links">
            <a href="#facebook"><img src={Facebook} alt="Facebook" /></a>
            <a href="#twitter"><img src={Twitter} alt="Twitter" /></a>
            <a href="#youtube"><img src={Youtube} alt="Youtube" /></a>
          </div>
        </div>


        <div className="footer-col">
          <h5 className="footer-title">QUICK LINKS</h5>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#deals">Deals</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>


        <div className="footer-col newsletter-col">
          <h5 className="footer-title">SUBSCRIBE TO OUR NEWSLETTER</h5>
          <p className="newsletter-desc">
            Get the latest updates on new products and upcoming sales.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
          {subscribed && (
        <p className="subscribe-success">
          Thank you for subscribing! 🎉
        </p>
      )}
        </div>
      </div>

  
      <div className="footer-bottom">
        <p className="copyright">© 2026 ShopMate. All rights reserved.</p>
        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer