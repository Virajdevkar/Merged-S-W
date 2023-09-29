import React, { useState } from "react";
import "../BC-css/AddItemsPage.css";
import Rasgulla from "../images/default-2.jpg";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const AddItemsPage = () => {
  const navigate = useNavigate();

  // Dummy data for items
  const items = [
    {
      id: 1,
      name: "sweet",
      price: 10.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "rasgulla",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "jamun",
      price: 7.99,
      image: "item3.jpg",
    },
    {
      id: 4,
      name: "sweet",
      price: 10.99,
      image: "item1.jpg",
    },
    {
      id: 5,
      name: "rasgulla",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 6,
      name: "jamun",
      price: 7.99,
      image: "item3.jpg",
    },
    {
      id: 7,
      name: "jamun",
      price: 7.99,
      image: "item3.jpg",
    },
    // Add more items as needed
  ];

  const [cart, setCart] = useState([]);

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

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const handleCartClick = () => {
    navigate("/cart", { state: cart });
  };

  return (
    <>
      <div className="scrollmenu">
        <a href="#home">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#news">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#contact">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#about">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#support">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#blog">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#tools">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#base">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#custom">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#more">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#logo">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#friends">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#partners">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#people">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#work">
          <img src={Rasgulla} alt="" />
        </a>
      </div>

      <div className="itemlist-page">
        <div className="shopping-sidenav">
          <SideBar />
        </div>
        <div className="itemlist-container">
          {items.map((item) => (
            <div key={item.id} className="itemlist-item">
              <img
                src={Rasgulla}
                alt={item.name}
                onClick={() => addToCart(item)}
              />
              <div className="itemlist-item-details">
                <div className="itemlist-item-name">{item.name}</div>
                <div className="itemlist-item-price">
                  ${item.price.toFixed(2)}
                </div>
                <div className="itemlist-item-quantity">Qty : 10kg</div>
              </div>
              <i className="fa-light fa-circle-plus" />
            </div>
          ))}
        </div>
      </div>

      <button className="cart" onClick={handleCartClick}>
        Cart ({totalItemsInCart})
      </button>
    </>
  );
};

export default AddItemsPage;
