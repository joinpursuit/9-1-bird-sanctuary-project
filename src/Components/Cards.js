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
            alert("Stop")
          }
        }
        
       let sum = 0 
       data.forEach((total) => {
        sum += Number(total.replace(/[^\d.-]/g, ''))
        document.querySelector("h4").innerHTML = `Total: $${sum}`
        if(data.length >= 3){
            document.querySelector("h4").innerHTML = `Total: $${sum * .9}`
            document.querySelector(".discount").innerHTML = `Discount: 10%`
        }
       })
       
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