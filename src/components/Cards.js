import Card from "./Card";

export default function Cards({
  birdData,
  birdsCart,
  setBirdsCart,
  total,
  setTotal,
  discount,
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
              total={total}
              setTotal={setTotal}
              discount={discount}
            />
          );
        })}
      </ul>
    </div>
  );
}
