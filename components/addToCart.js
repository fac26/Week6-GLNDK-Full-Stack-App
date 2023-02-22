import React, { useState } from 'react';
import { BuyBtn } from './comicCard';

const AddToCart = (comic) => {
  const [quantity, setQuantity] = useState([]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    const item = {
      id: comic.id,
      title: comic.title,
      quantity: parseInt(quantity),
      price: comic.price,
    };
    comic.addtoCart(item);
  };
  return (
    <div>
      {/* <label htmlFor="quantity">Quantity</label>
      <input type="number" value={quantity} onChange={handleQuantityChange} /> */}
      <BuyBtn onClick={handleAddToCart} text="Add to Cart" />
    </div>
  );
};

export default AddToCart;
