export default function birdCards({ birdData, addBird }){
    return (
        <>
            {birdData.map((bird) => {
                return (
                    <div 
                        style={{
                            padding: 5,
                            width: 400,
                            height: 'auto',
                            textAlign: 'center',
                            margin: '40px auto',
                            border: '1px solid purple',
                    }} 
                    className="birds"
                    key={bird.id} >
                        <h4>{bird.name}</h4>
                        <p>Price: ${bird.amount}</p>
                        <img src={bird.img} alt={bird.img} />
                        <button onClick={() => addBird(bird)}>Adopt</button>
                    </div>
                )
            })}
        </>
    )
}