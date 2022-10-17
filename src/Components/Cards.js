import cards from "./Cards.css"
import {useState} from "react"

const Cards = ({birdData}) => {



return (
    <section>
        {birdData.map(({name , amount, id, img}) => {
            return (
                <div className="birds" key={id}>
                    <h4>{name}</h4>
                    <p>Price: ${amount}</p>
                    <img src={img} alt={img}></img>
                    <br></br>
                    <button >Apodt</button>
                </div>
                 )
        })}
    </section>
)
}

export default Cards 