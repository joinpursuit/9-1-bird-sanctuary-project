export default function Cards ({ bird, handleClick }) {
return (
    <div className="birds card" key={bird.id}>
        <h1>{bird.name}</h1>
        <p>${bird.amount}</p>
        <img src={bird.img} alt={bird.img}></img>
        <button name={bird.name} value={bird.amount} onClick={() => handleClick(bird)}>Adopt</button>
    </div>
    )
};