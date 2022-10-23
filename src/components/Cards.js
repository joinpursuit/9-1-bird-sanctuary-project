import React from 'react';
import CardItem from './CardItem'



const Cards = ({birds}) => {


    const listBirds = birds.map(bird => { 
        return (
            <CardItem birdName={bird.name} birdAmount={bird.amount} key={bird.id} birdImg={bird.img} />
        )
    })

    return (
        <div>
            <ul>{listBirds}</ul>
        </div>
    );
};

export default Cards;