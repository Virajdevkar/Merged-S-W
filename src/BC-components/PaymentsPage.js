import React from "react";
import { useLocation } from "react-router-dom";
import "../BC-css/PaymentsPage.css";
import { useNavigate } from "react-router-dom";

const PaymentsPage = () => {

  const navigate = useNavigate();

  const proceed = () => {
    navigate("/Invoices");
  };

  const location = useLocation();
  return (
    <>
    <div className="cart-page">
      <h2>Cart Items</h2>
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
    <button className="Pay" onClick={proceed}>
        Proceed
      </button>
    </>
  );
};

export default PaymentsPage;
