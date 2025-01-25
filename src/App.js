import React from 'react';
import { products } from './Amit';
import Product from './Product';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>BATRA ENTERPRISES</h1>
      <h3>!!! We offer different products for you at affordable prices !!!</h3>
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id}>
            <Product
              product={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
