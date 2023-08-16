import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getData, getCategoryData } from '../../services/firebase'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { DotSpinner } from '@uiball/loaders'



function ItemListContainer() {
    const [productos, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setIsLoading(true)
        async function requestProducts() { 
            let respuesta = categoryId ? await getCategoryData(categoryId) : await getData() 
            setProducts(respuesta)
            setIsLoading(false)
        }

        requestProducts()
    }, [categoryId])

    if(isLoading) {
        return (
        <DotSpinner 
         size={40}
         speed={0.9} 
         color="black" 
        />
        )
    }

    if (productos.length === 0) {
        return <p>No hay productos disponibles para esa consulta</p>
    }

    return (
            <ItemList productos={productos}/>
)
}

export default ItemListContainer