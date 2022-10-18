

export default function birdCards({birdData}){
    return(
    <section>
      {birdData.map((birds)=>{ 
        return(
          <div class ='card'>
            <h3>{birds.name} </h3>
                <p>Price: ${birds.amount}</p>
                <img src={birds.img} alt={birds.img}/>
               <button>Adopt</button>
            
            </div>
          )
        }
      )}
    </section>
    )
}