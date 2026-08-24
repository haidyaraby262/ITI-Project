import { useEffect, useState } from 'react';
import './productpage.css'
function Product() {
  const[allproduct,setAllproduct]=useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setAllproduct(data));
  }, []);
  return (
    <>
    <div className="all-products-container">
      <h1 className="page-title">All Products</h1>
      <div className="products-grid">
        {allproduct.map((product) => (
          <div key={product.id} className="product-card">
            <div className="img-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <span className="price">${product.price}</span>
              <button className="add-to-cart-btn">🛒 Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
   
  )
}

export default Product