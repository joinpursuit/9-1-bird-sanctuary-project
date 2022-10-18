import React from 'react';
import { bonusRewards } from '../data/helperFunctions';

function OList({numOfBirds,setDiscount,setTotal,setBonus}) {
   
    return numOfBirds.map(({name, amount, id},i) => {
        const currentTotal = numOfBirds.reduce((acc,{amount}) => amount +acc ,0)
        if(i >= 2 ){
            const discounted = currentTotal - (currentTotal * .1)
            setDiscount(10)
            setTotal(discounted)
            setBonus(bonusRewards(discounted))

        }
        else{
            setDiscount(0)
            setTotal(currentTotal)
            setBonus(bonusRewards(currentTotal))
        }
        return(
                    <li key = {id}>{name} ${amount}</li>
                )
            })
        }



export default OList;