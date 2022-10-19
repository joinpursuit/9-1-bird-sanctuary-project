import React from 'react';

function OList({numOfBirds}) {
   
    return (
        <>
            {
                numOfBirds.map(({name, amount, id}) => {
                    return(
                            <li key = {id}>{name} ${amount}</li>
                            )
                        })
            }
        </>
    )
        }



export default OList;