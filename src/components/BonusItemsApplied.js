/* 
The bonus items are added as list items in an <ul> list item as follows:
1 bonus (first array item) is given if the total is at least 100 and no more than 299
2 bonuse (first and second array items) are given if the total is at least 300 and no more than 499
3 bonuses are given if the total is at least 500 and no more than 1000
4 bonuses are given if the total is 1000 or more 
*/
import React, {useEffect} from 'react'
import bonusItemsArr from '../data/bonusItems'


function BonusItemsApplied({ total, bonusItems, setBonusItems}) {

  useEffect(() => {
    if(bonusItems.length < 4){
      if(total >= 100 && total <= 299){
        setBonusItems([bonusItemsArr[0]])
      }else if(total >= 300 && total <= 499){
        setBonusItems([bonusItemsArr[0], bonusItemsArr[1]])
      }else if(total >= 500 && total <= 1000){
        setBonusItems([bonusItemsArr[0], bonusItemsArr[1], bonusItemsArr[2]])
      }else if(total >= 1000){
        setBonusItems([bonusItemsArr[0], bonusItemsArr[1], bonusItemsArr[2],bonusItemsArr[3]])
      }
    }
  
  }, [total])
  
  return (
    <ul className='bonus'>
      {bonusItems.map((item) => (
        <li>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default BonusItemsApplied