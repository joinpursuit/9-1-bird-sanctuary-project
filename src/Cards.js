import React from 'react';

const Cards = ({data}) => {

    // add  birds to the shopping cart by pushing the adopt button
    // can only add the same bird once to the cart
    // if you try to add the same bird more than once to the cart it alerts(look at user stories)


    return (
        <div>
            {
                data.map((bird)=>{
                    return(
                        <div>
                            <h2>{bird.name}</h2>
                           <img src={bird.img}/>
                           {/* figure out how to display the image on the screen */}
                            <h4>Price: ${bird.amount}</h4>
                            <button> Adopt</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cards;