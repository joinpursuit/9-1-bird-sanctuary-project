import React from "react"
// import bonusItems from "../data"
// const [img, name, amount, id] = [birdData]
 

export default function Cards({birdData, addBird}) {
console.log(birdData)

    return(
        <div className="cart-checkout"> 
             {
                birdData.map((bird) => {
                    return(
                       
                    <div className="cards">
                        <div key ={bird.id} className="oneCard" >
                            <div className ="birdImg"> 
                                <h3>{bird.name}</h3> 
                                <div>Price: ${bird.amount} 
                               <img src= {bird.img} alt= "Tropical Bird" />
                                <button onClick={ () => addBird(bird)}>ADOPT</button>
                                </div> 
                            </div>
                        </div>
                    </div>    
                )})
            } 
        </div> 
    )
}


// birds.map((bird, index) => {
//     return(
//     <div key={bird[index].id}>
      
//        <div 
//             className ="birdImg">   
//             <img src= {bird[index].img} 
//                 alt= "Tropical Bird" />
//        </div> 
//        {bird[index].name}
//        {bird[index].amount}
//     </div>
// )})




// const index = dogArray.findIndex((dog) => dogId === dog.id);

//NOTES:
//Bird Card Layout - all items centered
// bkgrd color - sky blueish
//h3 -birdName
//h5 - birdPrice
//birdImage
//Adopt button


//Click "Adopt' button on birdCard
// => add birdPrice to Total, 
// => increase NumberOfAdoptions by 1

// The birds are in the array in src/data/birds.js and the bonus items are in src/data/bonusItems.js. Import these in your App.js component and pass them to your child components as needed. Use these items and do not change any information in the array, or else the tests will fail.

// Each bird card displays the name, image, and amount (price)
// Each bird card has a class name of birds
// Each bird card has an Adopt button
// The button text should be: Adopt