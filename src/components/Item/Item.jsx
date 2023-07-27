import React from "react";
import './Item.css'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ClickTracker from '../ItemCount/ItemCount' 


function Item(props) {
    const { title, description, img, price } = props

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={img} width="200px" />
            <p>${price}</p>
            <ClickTracker></ClickTracker>
            <ButtonComponent></ButtonComponent>
        </div>
    )
}

export default Item