import Card from "./Card";

function Cards({birds, updateCart}) {
    return (
        <div className="birds">
            {birds.map((prop) => {
                return <Card bird={prop} updateCart={updateCart}/>
            })}
        </div>
    )
}

export default Cards