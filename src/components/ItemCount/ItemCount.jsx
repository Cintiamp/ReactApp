import './ItemCount.css'
import React, { useState } from 'react'

export default function ClickTracker({ stock, onAddToCart }) {

    const [clicks, setClicks] = useState(1)

    function handleClick() {
        if ( (clicks >= 0) && (clicks < stock) )
        setClicks(clicks + 1)
    } 

    function handleClickResta() {
        if (clicks > 0 )
        setClicks(clicks - 1)
    }

    function handleConfirm () {
        onAddToCart(clicks)
    }

    return (
        <div className='itemcount'>
         
            <button  onClick={handleClickResta}  className='containerClicks'>
                -
            </button>
                <h1 className='clicks'>{clicks}</h1>
            <button  onClick={handleClick}  className='containerClicks'>
                +
            </button>

            <div>
            <button disabled={ stock === 0 } onClick={handleConfirm}>  
                Agregar al carrito
            </button>
            </div>
        </div>
    )
}