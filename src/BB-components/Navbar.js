import React from "react";
import "../BB-css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <a href="/Home">Home</a>
        <a href="/Inventory">Inventory</a>
        <a href="/SellingStats">Top Selling</a>
        <a href="/TransactionHistory">Transaction history</a>
        <a href="/TransactionDetails">Transactiondetails</a>
        <a href="/addextra">Addextra</a>
        <a href="/Subscription">Subscription</a>
        <a href="/Payment">Payment</a>
      </div>
    </>
  );
};

export default Navbar;
