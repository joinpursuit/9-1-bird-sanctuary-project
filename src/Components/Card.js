import React from 'react';
import {useState} from "react";
import birdData from "../data/birds";




const Card = ({birdData}) => {
    const [total, setTotal] = useState(0)
    const [birdsInCart, setBirdsInCart] = useState([]);

    function handleSubmit(data) {
        console.log(birdsInCart)
        const name = data.name;
        const amount = data.amount;
        const id = data.id
        if(!birdsInCart.find(e => e.name === name || e.amount === amount)) {
            birdsInCart.push({name, amount, id});
        }
        setBirdsInCart(birdsInCart)
        setTotal(total + amount)
    }

    const birdCart = birdsInCart.map((element) => <li key={element.id}>{element.name}</li>)

    const bird = birdData.map((data) => {
        // console.log(data)
        return (
            <div className='container' style={{display:"flex", margin: "30px", padding: "10px 10px", justifyContent: "space-evenly"}}>
                <div className="card" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: "8px"}}>
                    <h3>{data.name}</h3>
                    <p>{data.amount}</p>
                    <img className="photo" src={data.img} key={data.id} style={{width:"100%"}} />
                    <button onClick={()=>{handleSubmit(data)}}>Adopt!</button>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div>
            <h2>Cart</h2>
            <p>Total: ${total}</p>

            <ol>{birdCart}</ol>
           
            <p>Discount:</p>
            {/* {birds} */}
        </div>
        {bird}</div>
    )

};


export default Card;