import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, addToCart }) => {
  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;