import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Redux/actions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title}
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
