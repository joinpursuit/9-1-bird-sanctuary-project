import { useState } from "react";
import BirdCards from './Components/BirdCards'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

import './App.css'

function App () {

  const [userCart, setUserCart] = useState([])
  // let totalCart = 0
  const [totalCart,setTotalCart] = useState(0)
  const [discount, setDiscount] = useState(0)
  let y = JSON.parse(localStorage.getItem('noDisc')) 
  const addBird = (bird) => {
    let x = totalCart + bird.amount
   
    
    if(userCart.includes(bird)){
      alert('You have already added this bird to the cart')
    }else{
    setUserCart([...userCart, bird])
      // console.log({userCart})
      
      
      if(userCart.length+1 ===3){
          // console.log(totalCart)
          // console.log(x)
          
          setDiscount(10)
          setTotalCart(x - (x * (.10)))
          localStorage.setItem('noDisc', JSON.stringify(x));
          console.log('nodisc',JSON.parse(localStorage.getItem('noDisc')),"y",y,"totalcart",totalCart,"birdamount",bird.amount)
        
        }else if (userCart.length+1 <3) {setTotalCart(x)
        console.log("x:" ,x,(userCart.length+1))

        }else if (userCart.length+1>3){
          y = y+bird.amount
          setTotalCart(y - (y * (.10))) //600 
          // localStorage.setItem('noDisc', JSON.stringify(y));
          console.log("y",y,userCart.length+1, "     x    ", x)
        }
      } 
    }
  
    const deleteBird = (bird) => {
      console.log("total",totalCart)
      // console.log(bird)
      let deleted = userCart.filter((x) => x.id !== bird.id)
       console.log("deleted",deleted)
       console.log("bird amount", bird.amount)
          setUserCart(deleted)
          if(deleted.length<3){
            setDiscount(0)
            const basic = JSON.parse(localStorage.getItem('noDisc'));
            console.log("basic", basic)
          setTotalCart(basic - (bird.amount))
          }else {
            const basic = JSON.parse(localStorage.getItem('noDisc'));
            console.log("basic2",basic)
            //array with prices is in bird. do i map through bird?
                // userCart.map((deleted)=>{
                //   let x = totalCart + deleted.amount
                //   console.log('deletedAmount',deleted)
                //   console.log("newX",x)
                //   return(
                //   setTotalCart(x - (x * (.10))))
                  
                // })
            // option 2 . 
            setTotalCart(basic - (basic *.1))
            
          }
    }
  return (
    <div className="App">
      <main>
        
        <Cart 
        userCart={userCart}
        totalCart={totalCart}
        discount={discount}
        bonusItems={bonusItems}
        deleteBird={deleteBird}
        />

        <Checkout 
        setUserCart={setUserCart} 
        setDiscount={setDiscount}
        setTotalCart={setTotalCart}
        />

        <BirdCards
        birdData={birdData}
        addBird={addBird}
        />
      </main>
    </div>
  )
}



export default App;
