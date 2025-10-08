import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, toggleCart }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-overlay" onClick={toggleCart}>
        <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button className="close-btn" onClick={toggleCart}>×</button>
          </div>
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-overlay" onClick={toggleCart}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={toggleCart}>×</button>
        </div>
        
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price} each</p>
              </div>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button 
                  className="quantity-btn"
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginLeft: '10px', backgroundColor: '#e74c3c', color: 'white' }}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-total">
          <div className="total-amount">Total: ${total.toFixed(2)}</div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;