import Card from "./Card";

export default function Cards({
  birdData,
  birdsCart,
  setBirdsCart,
  discount,
  setDiscount,
}) {
  return (
    <div className="birds">
      <ul>
        {birdData.map((bird) => {
          return (
            <Card
              key={bird.id}
              bird={bird}
              birdsCart={birdsCart}
              setBirdsCart={setBirdsCart}
              discount={discount}
              setDiscount={setDiscount}
            />
          );
        })}
      </ul>
    </div>
  );
}
