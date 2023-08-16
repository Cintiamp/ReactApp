import React from "react";
import './Item.css'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";


function Item(props) {
    const { title, description, img, price, id } = props

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={img} width="200px" />
            <p>${price}</p>
            <Link to={`/product/${id}`}>
            <ButtonComponent>Ver producto</ButtonComponent>
            </Link>
        </div>
    )
}

export default Item