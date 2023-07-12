import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{display:"flex",flexWrap:'wrap'}}>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
