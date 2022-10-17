import Card from "./Card";

export default function Cards({ birdData }) {
  console.log(birdData);
  return (
    <div className="cards">
      <ul>
        {birdData.map((bird) => {
          return <Card key={bird.id} bird={bird} />;
        })}
      </ul>
    </div>
  );
}
