import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import getData, { getCategoryData } from '../../services/asyncMock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'


function ItemListContainer() {
    const [productos, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        async function requestProducts() { 
            let respuesta = categoryId ? await getCategoryData(categoryId) : await getData() 
            setProducts(respuesta)
        }

        requestProducts()
    }, [categoryId])

    return (
            <ItemList productos={productos}/>
)
}

export default ItemListContainer