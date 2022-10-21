import React from "react"
import bonusItems from "../data/bonusItems"
//import { v1 as generateUniqueID } from "uuid";

export default function Cart({birdData, adoptedBirds, setAdoptedBirds}){


    let total = 0
    const adoptedBirdsList = adoptedBirds

    let adoptedBirdsNum = adoptedBirdsList.length

    for (let thisBird of adoptedBirds){
        total = total + thisBird.amount 
    }
    if(adoptedBirdsNum >= 3){
        total = total - (total * .1)
    }
 const bonusList = bonusItems
 console.log("bonusList = ", bonusList)
 let key
 let id = ""
 let bonus = []
    
    if(total >= 100 && total <= 299){
        bonus.push(bonusList[0])
        id = "aejhdi555"

    } else if (total >=300 && total <500){
        bonus.push(bonusList[0], bonusList[1])
        id = "aejhd777"

    } else if (total >=500 && total < 1000){
        bonus.push(bonusList[0], bonusList[1], bonusList[2])
        id = "aejhdi333"

    } else if( total >= 1000){
        bonus.push(bonusList[0], bonusList[1], bonusList[2], bonusList[3])
        id = "aejhdi999"
    } 
    
    function removeBird(birdID) {
        const filteredBirds = adoptedBirds.filter((bird) => bird.id !== birdID);
        setAdoptedBirds(filteredBirds)
      }



    // The bonus items are added as list items in an <ul> list item as follows:
// 1 bonus (first array item) is given if the total is at least 100 and no more than 299
// 2 bonuses (first and second array items) are given if the total is at least 300 and no more than 499
// 3 bonuses are given if the total is at least 500 and no more than 1000
// 4 bonuses are given if the total is 1000 or more


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
                            {bird.name} - ${bird.amount}
                            <button onClick={ ()=>removeBird(bird.id)}>Remove</button>
                        </li>
                        )
                     })
                }
                </ol>   
          
                <p className = "donationLine">Your donations have qualified you for the following items:</p>
                <ul>
                {
                  bonus.map((bonuses) => {
                     return (
                        < li className="bonus-rewards" key={id}> 
                          {bonuses}
                        </li>
                        )
                     })
                }
                </ul>   


                {/* <p className = "p-hidden" >
                    <ul className ="ul-hidden"></ul>
                </p> */}

        </div>
    )
 }

