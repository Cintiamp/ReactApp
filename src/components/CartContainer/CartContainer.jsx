import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


function CartContainer() {
    const { cart, removeItem } = useContext(cartContext)

    return (
        <div>
            <h1>Cart</h1>
            {
            cart.map( item => (
                <div key={item}>
                    <h2>{item.title}</h2>
                    <p>Precio unitario: ${item.price}</p>
                    <p>Cantidad a comprar: {item.count}</p>
                    <p>Precio total ${item.count * item.price}</p>
                    <button onClick={ () => removeItem(item.id) }>Eliminar</button>
                </div>
            ))
            }
            <div>Total de la compra: </div>
            <Link to="/checkout">Comprar</Link>
        </div>
    )
}


export default CartContainer

