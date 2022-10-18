export default function Cards ({ bird, selectBird, updateBirds }) {
console.log(bird.name + ':' + bird.amount)
return (
    <div className="birds" key={bird.id}>
        <h3>{bird.name}</h3>
        <p>${bird.amount}</p>
        <img src={bird.img} alt={bird.img}></img>
        <button name={bird.name} value={bird.amount} onClick={selectBird}>Adopt</button>
    </div>
    )
};