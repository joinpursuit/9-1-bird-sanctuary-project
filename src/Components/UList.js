import React from 'react';
import bonusItems from '../data/bonusItems';
import { bonusRewards } from '../data/helperFunctions';

function UList({total}) {
    const bonus = bonusRewards(total)
  
    return (
        <>
            {
            bonusItems.map((item,index) => {
                if(index < bonus){
                    return (
                        <li>{item}</li>
                        ) 
                    }
                })
            }
        </> 
    )
}

export default UList;