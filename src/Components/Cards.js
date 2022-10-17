import cards from "./Cards.css"
import {useState} from "react"



const Cards = ({birdData}) => {



 function birdCard(birdId) {
    const li = document.createElement("li")
    const index = birdData.findIndex((bird) => birdId === bird.id);
    li.textContent = `${birdData[index].name}: $${birdData[index].amount}`
    return li
 }

 const birdOrder = (birdId) => {
      const li = birdCard(birdId)
     let ol = document.querySelector("ol")
      ol.append(li)
 }



return (
    <section>
        {birdData.map(({name , amount, id, img}) => {
            return (
                <div className="birds" key={id}>
                    <h4>{name}</h4>
                    <p>Price: ${amount}</p>
                    <img src={img} alt={img}></img>
                    <br></br>
                    <button onClick={() => birdOrder(id)}>Apodt</button>
                </div>
                 )
        })}
    </section>
)

}

export default Cards 