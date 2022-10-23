import React from "react"
import bonusItems from "../data/bonusItems"
// import { v1 as generateUniqueID } from "uuid";

export default function Cart({adoptedBirds, adoptedBirdsNum, bonus, total, removeBird}){


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
                            <button className="remove" onClick={ ()=>removeBird(bird.id)}>Remove</button>
                        </li>
                        )
                     })
                }
                </ol>   
          
                <p className = "donationLine">Your donations have qualified you for the following items:</p>
                <ul>
                {
                  bonus.map((bonuses,index) => {
                     return (
                        < li className="bonus-rewards" key={index}> 
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



// moved to App.js   
//  const bonusList = bonusItems
//  console.log("bonusList = ", bonusList)
//  let key
//  let id = Math.floor(Math.random() * 108)
//  let bonus = []
    
//     if(total >= 100 && total <= 299){
//         bonus.push(bonusList[0])
//         // id = "aejhdi555"
//         // id = 
//         id = id * .5


//     } else if (total >=300 && total <500){
//         bonus = []
//         bonus.push(bonusList[0], bonusList[1])
//         // id = "aejhd777"
//         id = id * .8

//     } else if (total >=500 && total < 1000){
//         bonus = []
//         bonus.push(bonusList[0], bonusList[1], bonusList[2])
//         // id = "aejhdi333"
//         id = id * .6

//     } else if( total >= 1000){
//         bonus = []
//         bonus.push(bonusList[0], bonusList[1], bonusList[2], bonusList[3])
//         // id = "aejhdi999"
//         id = id * .2
        
//     } 

     //Moved to App.js
    // function removeBird(birdID) {
    //     const filteredBirds = adoptedBirds.filter((bird) => bird.id !== birdID);
    //     setAdoptedBirds(filteredBirds)
    //     // let thisLi = document.querySelector(".bonus-rewards")
    //     // thisLi.remove()
    //   }

