import React, { useState } from 'react';
import { buyBtn } from './comicCard';

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
        props.addtoCart(item);
    };
    return (
        <div>
            <label htmlFor="quantity">Quantity</label>
            <input typs="number" name="quantity" value={quantity} onChange={handleQuantityChange} />
            <buyBtn onClick={handleAddToCart} text="Add to Cart" />
        </div>
    );
};
