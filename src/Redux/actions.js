

import {FETCH_PRODUCTS,ADD_TO_CART,REMOVE_FROM_CART} from './constant';
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      // Simulating an API call or fetching data
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();

      // Dispatch the action with the fetched products
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};


export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};