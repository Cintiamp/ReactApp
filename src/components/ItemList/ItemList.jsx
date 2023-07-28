import './ItemList.css'
import Item from '../Item/Item'

function ItemList(props) {
    return(
        <div className='container_'>
            <p>{props.greeting}</p>
            <h1>Listado de productos</h1>

            {props.productos.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}

export default ItemList