import './ItemListContainer.css'

function ItemListContainer(props) {
    return (

        <div className='container_'>
        <p>{props.greeting}</p>
        </div>
    )
}

export default ItemListContainer