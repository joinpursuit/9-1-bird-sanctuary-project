import Cards from './components/Cards'
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import birds from './data/birds'

console.log(birds)

function App () {
  return (
    <div>
      <Cards birds={birds}/>
      <Cart/>
      <Checkout/>
    </div>
  );
};

export default App;
