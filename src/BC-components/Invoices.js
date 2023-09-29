import React from "react";
import "../BC-css/Invoice.css"; // Import the CSS for this page
import { useLocation } from "react-router-dom";

const InvoicePage = () => {

  const location = useLocation();

  // Check if location has a state property and if it's an array
  // const cartItems = location?.state?.length > 0 ? location.state : [];

  // // Calculate the total price
  // const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  

  return (
    <div className="invoice-page">
      <h2>Invoice</h2>
      {!location.state || location.state.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {location.state.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div>{item.name}</div>
                <div>${item.price.toFixed(2)}</div>
                <div>Quantity: {item.quantity}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InvoicePage;
