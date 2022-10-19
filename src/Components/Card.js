 import "./Card.css";
 
export default function Card({birds, updateCart}) {
    return(
        <>
        {birds.map((bird)=> {
          return(
            <div className="birds">
                <h4>{bird.name}</h4>
                <p>Price: ${bird.amount}</p>
                <img src={bird.img} alt={bird.name}></img>
                <button
                onClick={() => {updateCart(bird)}}>Adopt</button>
            </div>
          );
  })}
        </>
    )
}