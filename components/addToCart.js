import React, { useState, useEffect } from 'react';
import { BuyBtn } from './comicCard';

const AddToCart = ({ comic }) => {
  const [quantity, setQuantity] = useState([]);
  // [1] Add comic to useState here
  const [item, setItem] = useState({});
  let comicItem = {};
  useEffect(() => {
    const storedBasket = localStorage.getItem('basket');
    const basketItems = storedBasket ? JSON.parse(storedBasket).length : 0;
    setBasketCount(basketItems);
  }, [item]);


  // [2] Add useEffect to trigger on change to comic

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    console.log('whatev');
    comicItem = {
      id: comic.id,
      title: comic.title,
      quantity: 1,
      price: comic.price,
    };

    setItem(comicItem.title);

    // [3] setComic to the comic data above
    // comic.addtoCart(item);
  };
  return (
    <div>
      {/* <label htmlFor="quantity">Quantity</label>
      <input type="number" value={quantity} onChange={handleQuantityChange} /> */}
      <BuyBtn onClick={handleAddToCart} text="Add to goiblib" />≠≠
    </div>
  );
};

export default AddToCart;
