import React, { useState, useEffect } from 'react';
import { BuyBtn } from './comicCard';

const AddToCart = ({ comic }) => {
  const [quantity, setQuantity] = useState([]);
  // [1] Add comic to useState here
  const [item, setItem] = useState('');
  let comicItem = {};
  useEffect(() => {
    // Check if there is basket in localstorage -  get item
    // if there is a basket = add to it the new item
    // if no basket = set an item
    console.log(item);
    //localStorage.setItem('basket', JSON.stringify(comic));
    //   ? JSON.parse(localStorage.setItem('basket')).length
    //   : 0;
  }, [item]);

  // [2] Add useEffect to trigger on change to comic

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
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
      <BuyBtn onClick={handleAddToCart} text="Add to Cart" />
    </div>
  );
};

export default AddToCart;
