import birdData from "../data/birds";
import Card from "./Card";
export default function Cards({
  id,
  name,
  img,
  amount,
  birdsData,
  cart,
  setCart,
}) {
  return birdData.map(({ name, amount, img }) => {
    return (
      <div className="birds">
        <Card name={name} amount={amount} img={img} />
      </div>
    );
  });
}
