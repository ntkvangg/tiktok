import React, { useEffect, useLayoutEffect, useState, memo, useCallback, useMemo } from "react";
import "./App.scss";
import Counter from "@/Counter";

/*
    useState
    -Initial state
    -Initial State with callback
    -setState with callback
    -component will re-render after setState

    -------------------
    -useEffect(callback)
    -useEffect(callback, [])
    -useEffect(callback, [dependencies])
    -callback always called after component mounted
    -call API
  */

function App() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");

    const changeProduct = (e) => {
        setProduct(e.target.value);
    };

    const changePrice = (e) => {
        setPrice(e.target.value);
    };

    const addProduct = () => {
        setProducts((pre) => [...pre, { product, price: parseInt(price) }]);
        setPrice("");
        setProduct("");
    };

    const total = useMemo(() => {
        return products.reduce((result, el) => {
            console.log("re-total");
            return result + el.price;
        }, 0);
    }, [products]);

    return (
        <div className="wrapper">
            <div>
                <input value={product} onChange={changeProduct} />
                <input value={price} onChange={changePrice} />
                <button onClick={addProduct}>Add</button>
            </div>
            <ul>
                {products.map((item, i) => (
                    <li key={i}>
                        {item.product} - {item.price}
                    </li>
                ))}
            </ul>
            <h2>Total {total}</h2>
            <Counter />
        </div>
    );
}

export default App;
