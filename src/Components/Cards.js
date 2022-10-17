import cards from "./Cards.css"


const Cards = ({birdData}) => {
    // let myString = "Shoebill: $100"

    // myString = myString.replace(/\D/g,'')
    // console.log(Number(myString))

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
 
 const total = () => {

     let sum = 0
     const li = document.querySelectorAll("li")
     li.forEach((list) => {
     sum += Number(list.textContent.replace(/\D/g,'')) 
     if(li.length >= 3)
     return (
        document.querySelector("h4").textContent = `Total: $${sum *.90}`
     )
     else (
        document.querySelector("h4").textContent = `Total: $${sum}`
     )
     })
 }

 const discount = () => {
    const li = document.querySelectorAll("li")
    if(li.length >= 3){
        document.querySelector(".discount").textContent = `Discount: 10%`
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
          birdOrder(id);
          total();
          discount();
        }}>Apodt</button>
                </div>
                 )
        })}
    </section>
)

}

export default Cards 