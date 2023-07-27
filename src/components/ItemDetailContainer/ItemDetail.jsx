import React from "react"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
import ClickTracker from "../ItemCount/ItemCount"



function ItemDetail(product) {

    return (
        
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.img} width="200px" />
            <p>${product.price}</p>
            <ClickTracker></ClickTracker>
            <ButtonComponent></ButtonComponent>
        </div>   
    )
}

export default ItemDetail