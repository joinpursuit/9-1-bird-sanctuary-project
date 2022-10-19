import cards from "./Cards.css"


const Cards = ({birdData, handleEvent, data}) => {
console.log(data)
        function birdCard(birdId) {  
          const index = birdData.findIndex((bird) => birdId === bird.id);
          const birdArray = `${birdData[index].name}: $${birdData[index].amount}`
          if(!data.includes(birdArray)){
              handleEvent(birdArray)
          }
          else{
            alert("You have already added this bird to the cart")
          }
        }
        
        let sum = 0 
    data.forEach((total) => {
     sum += Number(total.replace(/[^\d.-]/g, ''))
     
    })
       
        const itemArray = document.querySelectorAll(".items")

          if(sum >= 100){
             if(sum <= 299){
             itemArray[0].classList.remove("hidden")
             }
          }
            
          if(sum >= 300){
              if(sum <= 499){
                itemArray[0].classList.remove("hidden")
                  itemArray[1].classList.remove("hidden")
              }
          }
          
          if(sum >= 500){
              if(sum <= 1000){
                itemArray[0].classList.remove("hidden")
                  itemArray[1].classList.remove("hidden")
                 itemArray[2].classList.remove("hidden")
              }
         }
         
         if(sum > 1000){
             itemArray[0].classList.remove("hidden")
                  itemArray[1].classList.remove("hidden")
                 itemArray[2].classList.remove("hidden")
            itemArray[3].classList.remove("hidden")
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
      
        }}>Adopt</button>
                </div>
                 )
                })}
         
    </section>
)
            }


export default Cards 