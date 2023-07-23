import './ItemListContainer.css'
import ClickTracker from '../ItemCount/ItemCount' 
import getData from '../../services/asyncMock'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'

function ItemListContainer(props) {

    const [products, setProducts] = useState()

    async function requestProducts(){
        const respuesta = await getData()
        setProducts(respuesta)

    }

    useEffect(
        () => {
            requestProducts()
        }, [])
    requestProducts()
    

    return (

        <div className='container_'>
            <p>{props.greeting}</p>
            <ClickTracker></ClickTracker>
            <h1>Listado de productos</h1>
            {products.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>


    )
}

export default ItemListContainer