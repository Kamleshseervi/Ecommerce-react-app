import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
        }}
      />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-price">${product.price}</div>
      <button 
        className="add-to-cart-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;