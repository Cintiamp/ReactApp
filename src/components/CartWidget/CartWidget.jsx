import './CartWidget.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

function CartWidget () {
    const context = useContext(cartContext)
    console.log(context)

    return (
        <Link to='/cart'>
        <div className='carrito'>
            <FontAwesomeIcon icon={faCartShopping} /> 
            <span> {context.getTotalItemsInCart()} </span>
        </div>
        </Link>
    )
}

export default CartWidget