import React from 'react'

export default function Card({img, name, amount, id, cart, setCart}) {

    return(
        <div className='card'>
            <h4>{name}</h4>
            <p>${amount}</p>
            <img src={img} alt={name} width='200px'/>
            <br/>
            <button 
            value={id}
            onClick={()=>setCart([...cart, {name, amount}])}>Adopt</button>
        </div>
    )
}