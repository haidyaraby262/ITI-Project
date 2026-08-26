import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Bestproduct.css';
import { useCart } from '../Cartpage/CartContext';

function Bestproduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedProducts, setLikedProducts] = useState([]);
  const { addCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const toggleWishlist = (id) => {
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter((item) => item !== id));
    } else {
      setLikedProducts([...likedProducts, id]);
    }
  };

  if (loading) return <div className="loading">loading...</div>;

  return (
    <div className="best-selling-section">
      <div className="section-header">
        <h2>Best Selling Products</h2>
        <Link to="/product" className="view-all-link">
          View All Products &rarr;
        </Link>
      </div>
      
      <div className="products-grid">
        {products.map((product) => {
   
          const isLiked = likedProducts.includes(product.id);

          return (
            <div key={product.id} className="product-card">
              <div className="img-wrapper">
                <img src={product.image} alt={product.title} />
                <button 
                  className={`wishlist-btn ${isLiked ? 'liked' : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  {isLiked ? '♥' : '♡'}
                </button>
              </div>

              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <div className="rating">
                  <span>★ ★ ★ ★ ☆</span>
                  <span className="count">({product.rating?.count || 100})</span>
                </div>
              </div>
              
              <div className="price-row">
                <span className="price">${product.price}</span>
              </div>
              
              <button className="add-to-cart-btn"
              onClick={() => addCart(product)}
              >🛒 Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bestproduct;