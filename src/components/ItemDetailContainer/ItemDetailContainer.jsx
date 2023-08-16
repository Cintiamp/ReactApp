import { useState, useEffect } from "react";
import { getProductData } from "../../services/firebase";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [product, setProduct] = useState({})

    const { id } = useParams()

     useEffect(() => {
        async function requestProduct() {
        const respuesta = await getProductData(id)
        setProduct(respuesta)
     }

        requestProduct()
     }, [])

     
     return (
        <div>
            <ItemDetail title={product.title} description={product.description} img={product.img} price={product.price} data={product.data}></ItemDetail>
            
        </div>
     )
}

export default ItemDetailContainer