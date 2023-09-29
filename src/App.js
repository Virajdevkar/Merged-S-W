import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

// BC-components
import SignupPage from "./BC-components/SignupPage";
// import Navbar from "./BC-components/Navbar";
import ShoppingCartPage from "./BC-components/ShoppingCartPage.js";
import LoginPage from "./BC-components/LoginPage";
import PaymentsPage from "./BC-components/PaymentsPage.js";
import SearchPage from "./BC-components/SearchPage";
import AddItemsPage from "./BC-components/AddItemsPage";
import Invoices from "./BC-components/Invoices.js";
import CreateBillPage from "./BC-components/CreateBillPage";
import Code from "./Code";

// BB-components
import LandingPage from "./BB-components/LandingPage.js";
import Home from "./BB-components/Home.js";
import AddExtra from "./BB-components/AddExtra";
import Inventory from "./BB-components/Inventory.js";
// import Navbar from "./BB-components/Navbar.js";
import Selling from "./BB-components/Selling.js";
import SellingStats from "./BB-components/SellingStats.js";
import TransactionDetails from "./BB-components/TransactionDetails.js";
import TransactionHistory from "./BB-components/TransactionHistory.js";
import Subscription from "./BB-components/Subscription";
import Payments from "./BB-components/Payment1";

const App = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); // Initialize cart as an empty array

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (item) => {
    // Implement your removeFromCart logic here
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* BC-routing */}
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/items" element={<ShoppingCartPage />} />
        <Route
          path="/Additems"
          element={<AddItemsPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<PaymentsPage removeFromCart={removeFromCart} />}
        />
        <Route
          path="/Invoices"
          element={<Invoices removeFromCart={removeFromCart} />}
        />
        <Route path="/bill" element={<CreateBillPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/code" element={<Code />} />

        {/* BB-routings */}
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route exact path="/Home" element={<Home />} />
          <Route exact path="/SellingStats" element={<SellingStats />} />
          <Route exact path="/Inventory" element={<Inventory />} />
          <Route
            exact
            path="/TransactionHistory"
            element={<TransactionHistory />}
          />
          <Route exact path="/TransactionDetails" element={<TransactionDetails />} />
          <Route path="/AddExtra" element={<AddExtra />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/Payment" element={<Payments />} />
      </Routes>
    </>
  );
};

export default App;
