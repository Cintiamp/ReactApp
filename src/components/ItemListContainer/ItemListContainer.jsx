import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import getData from '../../services/asyncMock'

const products = [
        {
            title: "Black xs - femme",
            id: 1,
            stock: 10,
            description: "EDP",
            img: "../../../public/assets/black-xs-femme-edp.jpg",
            price: 51800
        },
        {
            title: "Black xs - men",
            id: 2,
            stock: 10,
            description: "EDT",
            img: "../../../public/assets/black-xs-men-edt.jpg",
            price: 53578
        },
        {
            title: "Fame - femme",
            id: 3,
            stock: 6,
            description: "EDP",
            img: "../../../public/assets/fame-femme-edp.webp",
            price: 65550
        },
        {
            title: "Phantom - men",
            id: 4,
            stock: 6,
            description: "EDT",
            img: "../../../public/assets/phantom-men-edt.png",
            price: 54650
        },
        {
            title: "Olympea - femme",
            id: 5,
            stock: 12,
            description: "EDP",
            img: "../../../public/assets/olympea-femme-edp.png",
            price: 50520
        },
        {
            title: "Invictus - men",
            id: 6,
            stock: 12,
            description: "EDT",
            img: "../../../public/assets/invictus-men-edt.jpg",
            price: 52550
        },
        {
            title: "Lady Million - femme",
            id: 7,
            stock: 12,
            description: "EDP",
            img: "../../../public/assets/lady-million-femme-edp.jpg",
            price: 63150
        },
        {
            title: "One Million - men",
            id: 8,
            stock: 12,
            description: "EDT",
            img: "../../../public/assets/one-million-men-edt.webp",
            price: 53601
        },
        {
            title: "Pure xs - femme",
            id: 9,
            stock: 8,
            description: "EDP",
            img: "../../../public/assets/pure-xs-femme-edp.jpg",
            price: 51800
        },
        {
            title: "Pure xs - men",
            id: 10,
            stock: 8,
            description: "EDT",
            img: "../../../public/assets/pure-xs-men-edt.jpg", 
            price: 44650
        },
    ] 

function ItemListContainer(props) {
    console.log('Renderizando item list container')
    const [products, setProducts] = useState([])

   async function requestProducts() {
       const respuesta = await getData()
       setProducts(respuesta)
    }
    

    useEffect(() => {
        requestProducts()
        console.log('Montaje ILC')
    }, [])

    return (

        <div className='container_'>
            <p>{props.greeting}</p>
            <h1>Listado de productos</h1>

            {products.map((item) => (
                <Item key={item.id} {...item} />
            ))}

            
        </div>

)
}

export default ItemListContainer