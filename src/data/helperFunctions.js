
// function to determine bonus number
 function bonusRewards(value) {

     if(value >= 100 && value <= 299){
         return 1
     }
     else if(value >= 300 && value <= 499){
        return 2
     }
     else if(value >= 500 && value <= 1000){
        return 3
     }
     else if(value > 1000){
        return 4
    }
     
 }

 export {bonusRewards}
 