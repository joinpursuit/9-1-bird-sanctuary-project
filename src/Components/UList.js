import React from 'react';
import bonusItems from '../data/bonusItems';
import { bonusRewards } from '../data/helperFunctions';

function UList({numOfBirds}) {
    const total = numOfBirds.reduce((acc,{amount}) => amount +acc ,0)
    const bonus = bonusRewards(total)
  
    return bonusItems.map((item,index) => {
        if(index < bonus){
            return (
                <li>{item}</li>
                ) 
            }
        })
}

export default UList;