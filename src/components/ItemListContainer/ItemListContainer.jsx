import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import getData, { getCategoryData } from '../../services/asyncMock'
import { useParams } from 'react-router-dom'

/* const products = [
    {
        title: "Black xs",
        id: 1,
        stock: 10,
        description: "EDP",
        img: "../../assets/images/black-xs-femme-edp.jpg",
        price: 51800,
        category: "femme"
    },
    {
        title: "Black xs",
        id: 2,
        stock: 10,
        description: "EDT",
        img: "../../assets/images/black-xs-men-edt.jpg",
        price: 53578,
        category: "men"
    },
    {
        title: "Fame",
        id: 3,
        stock: 6,
        description: "EDP",
        img: "../../assets/images/fame-femme-edp.webp",
        price: 65550,
        category: "femme"
    },
    {
        title: "Phantom",
        id: 4,
        stock: 6,
        description: "EDT",
        img: "../../assets/images/phantom-men-edt.png",
        price: 54650,
        category: "men"
    },
    {
        title: "Olympea",
        id: 5,
        stock: 12,
        description: "EDP",
        img: "../../assets/images/olympea-femme-edp.png",
        price: 50520,
        category: "femme"
    },
    {
        title: "Invictus",
        id: 6,
        stock: 12,
        description: "EDT",
        img: "../../assets/images/invictus-men-edt.jpg",
        price: 52550,
        category: "men"
    },
    {
        title: "Lady Million",
        id: 7,
        stock: 12,
        description: "EDP",
        img: "../../assets/images/lady-million-femme-edp.jpg",
        price: 63150,
        category: "femme"
    },
    {
        title: "One Million",
        id: 8,
        stock: 12,
        description: "EDT",
        img: "../../assets/images/one-million-men-edt.webp",
        price: 53601,
        category: "men"
    },
    {
        title: "Pure xs",
        id: 9,
        stock: 8,
        description: "EDP",
        img: "../../assets/images/pure-xs-femme-edp.jpg",
        price: 51800,
        category: "femme"
    },
    {
        title: "Pure xs",
        id: 10,
        stock: 8,
        description: "EDT",
        img: "../../assets/images/pure-xs-men-edt.jpg", 
        price: 44650,
        category: "men"
    },
]  */

function ItemListContainer(props) {
    const [productos, setProducts] = useState([])
    const { categoryId } = useParams()

   async function requestProducts() {
    
    let respuesta = categoryId ? await getCategoryData(categoryId) : await getData() 
    setProducts(respuesta)
   }


    useEffect(() => {
        requestProducts()
    }, [])

    return (

        <div className='container_'>
            <p>{props.greeting}</p>
            <h1>Listado de productos</h1>

            {productos.map((item) => (
                <Item key={item.id} {...item} />
            ))}

            
        </div>

)
}

export default ItemListContainer