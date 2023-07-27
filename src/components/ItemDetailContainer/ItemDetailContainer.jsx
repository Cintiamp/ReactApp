import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [product, setProduct] = useState({})

    async function requestProduct() {
        const respuesta = await getProductData()
        setProduct(respuesta)
     }

     useEffect(() => {
        requestProduct()
     }, [])

     return (
        <div>
            <ItemDetail title={product.title} description={product.description} img={product.img} price={product.price}></ItemDetail>
        </div>
     )
}

export default ItemDetailContainer