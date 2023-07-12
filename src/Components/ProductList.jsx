import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../Redux/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
            <img
              src={product.image}
              style={{ width: "100px", height: "100px" }}
            />
          <p>{product.title}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
