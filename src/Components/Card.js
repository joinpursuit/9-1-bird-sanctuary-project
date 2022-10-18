import React from 'react';
import {useState} from "react";
import birdData from "../data/birds";


const Card = () => {

    const [birdInfo, getBirdInfo] = useState(birdData)
    // const birdName = birdInfo.map(data => {
    //     return (<li key={data.id}>{data.name}</li>)
    // })
    // const birdAmount = birdInfo.map(data => {
    // return (<li key={data.id}>{data.amount}</li>)
    // })
    // const birdImg = birdInfo.map(data => {
    //     return (<li key={data.id}>{data.img}</li>)
    // })
    const bird = birdInfo.map((data) => {
        return (
            <div className='container' style={{display:"flex", margin: "30px", padding: "10px 10px", justifyContent: "space-evenly"}}>
                <div className="card" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: "8px"}}>
                    <h3>{data.name}</h3>
                    <p>{data.amount}</p>
                    <img className="photo" src={data.img} key={data.id} style={{width:"100%"}} />
                    <button>Adopt!</button>
                </div>
            </div>
        )
    })

    return (
        <div>{bird}</div>
    )

};


export default Card;