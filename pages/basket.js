import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Basket = () => {
    const [currentBasket, setCurrentBasket] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentBasket(JSON.parse(localStorage.getItem("basket")));

            let basketArray = JSON.parse(localStorage.getItem("basket"));
            let total = basketArray.reduce((acc, current) => {
                return current.price * current.quantity + acc;
            }, 0);
            setTotalCost(total);
        }, 10);
    })



}