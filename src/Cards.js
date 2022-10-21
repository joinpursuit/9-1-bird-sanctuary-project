import React from "react";
import birdData from "./data/birds"




class Cards extends React.Component{
    render(){
 let Cards = birdData.map((birds)=> {

    return(

 
        <div className="Cards" key={birds.id}>
            <h4>{birds.name}</h4>
            <img src ={birds.img} alt="bird"/>
            <p>Price: ${birds.amount}</p>
            <button onClick={(e) => this.props.handleOnClick(birds.id)}>Adopt</button>

        </div>
        
    )}
 )
    
 return (
    <div>Cards</div>

 )

 
 }       
         
}
       
    
  

     
export default Cards;