import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import birdData from "./data/birds";
import Cards from "./Components/Cards";

function App() {
  return (
    <div>
      <Cards birds={birdData} />
    </div>
  );
}

export default App;
