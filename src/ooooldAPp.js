import React, { useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
import ProductList from "./Components/ProductList";

// Action types
const FETCH_PRODUCTS = "FETCH_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Action creators
const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();

      // Dispatch the action with the fetched products
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};

const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

// Reducer
const initialState = {
  products: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer, applyMiddleware(thunk));

// ProductList component

// Cart component
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
              {item.title.substring(0,15)}
              <img
              src={item.image}
              style={{ width: "100px", height: "100px" }}
            />
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <ProductList />
        </div>
        <div style={{ width: "50%" }}>
          <Cart />
        </div>
      </div>
    </Provider>
  );
};

export default App;
