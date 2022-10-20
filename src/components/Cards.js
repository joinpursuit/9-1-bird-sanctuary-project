import Card from "./Card";

function Cards({birds, updateCart}) {
    return (
        <div className="birds">
            {birds.map((bird) => {
                return <Card bird={bird} updateCart={updateCart} key={bird.id}/>
            })}
        </div>
    )
}

export default Cards
