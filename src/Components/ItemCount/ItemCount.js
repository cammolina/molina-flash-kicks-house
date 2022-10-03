import React, {useState} from "react";

const ItemCount = () => {

    const [count, setCount] = useState(1)

    const subtract = () => {
        setCount(count - 1);
    }

    const add = () => {
        setCount(count + 1);
    }

    const addToCart = () => {
        console.log(`El usuario quiere agregar ${count} productos`);
    }

    return (
        <div>
            <button onClick={subtract}> - </button>
            <h2> {count} </h2>
            <button onClick={add}> + </button>
            <button onClick={addToCart}> Agregar al Carrito </button>
        </div>
    )
}

export default ItemCount