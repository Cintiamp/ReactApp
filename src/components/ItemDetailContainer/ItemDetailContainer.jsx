import { useState, useEffect } from "react";
import { getProductData } from '../../services/asyncMock'
import ClickTracker from "../ItemCount/ItemCount";

function ItemDetailContainer() {
    const [product, setProduct] = useState({})

    async function requestProduct(){
        const respuesta = await getProductData()
        setProduct(respuesta)
    }

    useEffect(() => {
        requestProduct()
    }, [])

    return (
        <>
        <div>
            <img src={product.img} alt="imagen" />
        </div>
        <div>
            <h2>{product.title}</h2>
        </div>
        <div>
            <h4>{product.price}</h4>
            <small>{product.description}</small>
        </div>
        <ClickTracker></ClickTracker>
        </>
    )
}

export default ItemDetailContainer