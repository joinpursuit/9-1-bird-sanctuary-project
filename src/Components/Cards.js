import cards from "./Cards.css"
import {useState} from "react"

const Cards = ({birdData}) => {

const [array , setArray] = useState([])
console.log(array)
let bird = []

array.forEach((arr) => {
    bird.push(arr.textContent)
})
console.log(bird)

      function birdCard(birdId) {
          const li = document.createElement("li")
          const ol = document.querySelector("ol")
       
          const index = birdData.findIndex((bird) => birdId === bird.id);
        
          li.textContent = `${birdData[index].name}: $${birdData[index].amount}`
          if(!bird.includes(li.textContent)){
            ol.append(li)
            return setArray([...array, li])
            }
            else{
             alert("You have already added this bird to the cart")
            }  
        }

 
  const total = () => {
     let sum = 0
     
      array.forEach((arr) => {
          sum += Number(arr.textContent.replace(/\D/g,'')) 
          if(array.length >= 3)
          return (
              document.querySelector("h4").textContent = `Total: $${sum *.90}`
              )
              else (
                   document.querySelector("h4").textContent = `Total: $${sum}`

                   )
                  })
            }
            
             const discount = () => {
                if(array.length >= 3){
                    document.querySelector(".discount").innerHTML = `Discount: 10%`
                }
             }
            
            

            return (
            <section className="card">
        {birdData.map(({name , amount, id, img}) => {
            return (
                <div className="birds" key={id}>
                    <h4>{name}</h4>
                    <p>Price: ${amount}</p>
                    <img src={img} alt={img}></img>
                    <br></br>
                    <button onClick={() => {
           birdCard(id);
           total();
          discount();
         ;
        }}>Adopt</button>
        <br></br>
        
                </div>
                 )
                })}
         
    </section>
)

}

export default Cards 