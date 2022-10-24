import React from 'react';
import CardItem from './CardItem'



const Cards = ({birds, addBird}) => {
    const listBirds = birds.map(bird => { 
        return (
            <CardItem addBird={addBird} birdName={bird.name} birdAmount={bird.amount} birdId={bird.id} key={bird.id} birdImg={bird.img} />
        )
    })


    return (
        <div>
            <ul>{listBirds}</ul>
        </div>
    );
};

export default Cards;