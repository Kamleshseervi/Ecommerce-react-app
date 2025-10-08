import React from 'react';

const Header = ({ cartItems, toggleCart }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">ShopZone</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="cart-icon" onClick={toggleCart}>
            🛒
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;