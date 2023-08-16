import React from "react"
import ClickTracker from "../ItemCount/ItemCount"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { useState } from "react"
import { Link } from "react-router-dom"



function ItemDetail(product) {

    const { addToCart } = useContext(cartContext)
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    function handleAddToCart(count) {
        addToCart(product, count)
        alert(`Agregaste ${count} unidades de ${product.title} al carrito`)
        setIsAddedToCart(true)
    }

    const { getItemInCart } = useContext(cartContext)
    const itemInCart = getItemInCart() // id
    const maxItems = itemInCart ? product.stock - itemInCart.count : product.stock

    return (
        
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.img} width="200px" />
            <p>${product.price}</p>
            {
               isAddedToCart ? <Link to='/cart'><button>Ir al carrito</button></Link> : <ClickTracker onAddToCart={handleAddToCart} stock={maxItems}></ClickTracker>
            }
            {
                itemInCart && <p>Ya agregaste {itemInCart.count} unidades de este producto</p>
            }
            <h4>Descripción</h4>
            <p>{product.data}</p>
        </div>   
    )
}

export default ItemDetail