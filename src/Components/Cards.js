import cards from "./Cards.css"
import {useState} from "react"

const Cards = ({birdData, bonusItems}) => {

const [array , setArray] = useState([])
const [bonuses, setBonuses] = useState([])

let bird = []


array.forEach((arr) => {
    bird.push(arr.textContent)
})
console.log(bird)



      function birdCard(birdId) {
        const button = document.createElement("button")
        button.textContent = `Remove`
          const li = document.createElement("li")
          li.setAttribute("class", "birContent")
          const ol = document.querySelector("ol")
          const index = birdData.findIndex((bird) => birdId === bird.id);
          
          li.textContent = `${birdData[index].name}: $${birdData[index].amount}`
          li.append(button)
          
          button.onclick = function(){remove(li.textContent)}
          if(!bird.includes(li.textContent)){
            ol.append(li)
            return setArray([...array, li])
            }
            else{
             alert("You have already added this bird to the cart")
            }  
        }


 const remove = (birdContent) => {
    const filter = bird.filter((birds) => birds !== birdContent);
    console.log(filter)
    setArray(filter)
 }


 let sum = 0
  const total = () => {
     const list = document.querySelectorAll(".birContent")
      list.forEach((li) => {
          sum += Number(li.textContent.replace(/\D/g,'')) 
          if(list.length >= 3)
          return (
              document.querySelector("h4").textContent = `Total: $${sum *.90}`
              )
              else (
                   document.querySelector("h4").textContent = `Total: $${sum}`

                   )
                  })
            }
            
             const discount = () => {
                const list = document.querySelectorAll(".birContent")
                if(list.length >= 3){
                    document.querySelector(".discount").innerHTML = `Discount: 10%`
                }
             }
            
            
             const item = () => {
                   const itemArray = document.querySelectorAll(".items")
                   
                     if(sum >= 100){
                        if(sum <= 299){
                        itemArray[0].classList.remove("hidden")
                        }
                     }
                    if(sum >= 300){
                        if(sum <= 499){
                            itemArray[1].classList.remove("hidden")
                        }
                    }

                    if(sum >= 500){
                        if(sum <= 1000){
                            itemArray[2].classList.remove("hidden")
                        }
                    }
                    if(sum > 1000){
                       
                      itemArray[3].classList.remove("hidden")
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
            item()
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