
export default  function birdCards({birdData,addBird}){


    return(

    <section>
      {birdData.map((birds)=>{ 
        return(
            
          <div class ='card' key={birds.id}>
            <h3>{birds.name} </h3>
                <p>Price: ${birds.amount}</p>
                <img src={birds.img} alt={birds.img}/>
               <button onClick={()=>addBird(birds)}>Adopt</button>
            
            </div>
          )
        }
      )}
    </section>
    )
}