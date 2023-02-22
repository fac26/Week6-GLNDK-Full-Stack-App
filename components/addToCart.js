import React, { useState } from 'react';
import { BuyBtn } from './comicCard';

const AddToCart = ({ comic }) => {
  const [quantity, setQuantity] = useState([]);
  // [1] Add comic to useState here
  const [comic, setComic] = useState({});

  useEffect(() => {
    let local = JSON.parse(localStorage.setItem('basket', comic))
      ? JSON.parse(localStorage.setItem('basket')).length
      : 0;
    setItemsInBasket(local);
  }, []);

  // [2] Add useEffect to trigger on change to comic

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    const item = {
      id: comic.id,
      title: comic.title,
      quantity: 1,
      price: comic.price,
    };

    // [3] setComic to the comic data above
    // comic.addtoCart(item);
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
