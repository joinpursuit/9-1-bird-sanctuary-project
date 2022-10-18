import React from 'react';

function OList({numOfBirds,setDiscount,setTotal}) {
   
    return numOfBirds.map(({name, amount, id},i) => {
        const currentTotal = numOfBirds.reduce((acc,{amount}) => amount +acc ,0)
        if(i >= 2 ){
            setDiscount(10)
            setTotal(currentTotal - (currentTotal * .1))
        }
        else{
            setDiscount(0)
            setTotal(currentTotal)
        }
        return(
                    <li key = {id}>{name} ${amount}</li>
                )
            })
        }



export default OList;