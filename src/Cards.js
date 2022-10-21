import "./App.css";

export default function BirdCards({ recDon, addToCart }) {
  // return null;

  return (
    <section>
      <ul className="AdoptCards">
        {recDon.map((donation) => (
          <li className="birds" id={`${donation.id}`}>
            <h4>{donation.name}</h4>
            <p>Price: ${donation.amount}</p>
            <img
              src={`${donation.img}`}
              width="200"
              height="200"
              className="image"
            ></img>
            <button className="myButton" onClick={() => addToCart(donation)}>
              Adopt
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
