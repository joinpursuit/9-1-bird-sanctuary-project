
export default  function birdCards({birdData,addBird}){


    return(

    <div className="card">
      {birdData.map((birds)=>{ 
        return(
            
          <div className='birds' key={birds.id}>
            <h3>{birds.name} </h3>
                <p>Price: ${birds.amount}</p>
                <img src={birds.img} alt={birds.img}/>
               <button onClick={()=>addBird(birds)}>Adopt</button>
            
            </div>
          )
        }
      )}
    </div>
    )
}