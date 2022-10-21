import React from "react"
//import { v1 as generateUniqueID } from "uuid";

export default function Cart({birdData, adoptedBirds}){

    let total = 0
    const adoptedBirdsList = adoptedBirds
    let adoptedBirdsNum = adoptedBirdsList.length

    for (let thisBird of adoptedBirds){
        total = total + thisBird.amount 
    }
    if(adoptedBirdsNum >= 3){
        total = total - (total * .1)
    }


    return(
        <div className="cart">
            <h2>Cart</h2>
            <h4> Discount:{ adoptedBirdsNum < 3 ? 0 : 10}   % </h4>
        
            <h6>Total: ${total}</h6>
                <ol>
                {
                  adoptedBirds.map((bird) => {
                     return (
                        < li className="bird-item" key={bird.id}> 
                            {bird.name} <br/>
                            ${bird.amount}
                        </li>
                        )
                     })
                }
                </ol>   
                {/* <p className = "p-hidden" >
                    <ul className ="ul-hidden"></ul>
                </p> */}
          
            <p className = "donationLine">Your donations have qualified you for the following items:</p>
        </div>
    )
 }

