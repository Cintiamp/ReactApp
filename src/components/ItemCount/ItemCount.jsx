import './ItemCount.css'
import React, { useState } from 'react'

export default function ClickTracker() {
    let stock = 6
    const [clicks, setClicks] = useState(0)

    function handleClick() {
        if ( (clicks >= 0) && (clicks < stock) )
        setClicks(clicks + 1)
    } 

    function handleClickResta() {
        if (clicks > 0 )
        setClicks(clicks - 1)
    }

    return (
        <div className='itemcount'>
         
            <button  onClick={handleClickResta}  className='containerClicks'>
                <h1>-</h1>
            </button>
                <h1 className='clicks'>{clicks}</h1>
            <button  onClick={handleClick}  className='containerClicks'>
                <h1>+</h1>
            </button>
        
        </div>
    )
}