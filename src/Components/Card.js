import React from 'react';

const Card = ({birdData, handleSubmit}) => {
    const birds = birdData.map((data) => {
        return (
                <div className="cards" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: "8px", padding: "20px", borderRadius: "8px"}}>
                    <div className='birds'>
                        <h3>{data.name}</h3>
                        <p>Price: ${data.amount}</p>
                        <img className="photo" src={data.img} alt="" style={{height: "140px", width:"140px"}} />
                        <button onClick={()=>{handleSubmit(data)}}>Adopt!</button>
                    </div>
                </div>
            
        )
    })

    return (
        <div className='container' style={{display:"grid", gap: '20px', gridTemplateColumns: 'auto auto auto', justifyContent: "space-evenly"}}>
            {birds}
        </div>
    )

};


export default Card;