import './ItemListContainer.css'
import ClickTracker from '../ItemCount/ItemCount' 

function ItemListContainer(props) {
    return (

        <div className='container_'>
        <p>{props.greeting}</p>
        <ClickTracker></ClickTracker>
        </div>
    )
}

export default ItemListContainer