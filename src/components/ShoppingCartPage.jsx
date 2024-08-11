// src/components/ShoppingCartPage.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import './ShoppingCart.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  // Updated to handle item directly
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      <p>Total Plants: {totalQuantity}</p>
      <p>Total Cost: ${totalPrice}</p>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} />
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleDecrement(item)}>-</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
      <button>Checkout (Coming Soon)</button>
      <button><a href="/products">Continue Shopping</a></button>
    </div>
  );
};

export default ShoppingCartPage;
