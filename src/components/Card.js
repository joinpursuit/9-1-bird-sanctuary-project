export default function Card({ bird, birdsCart, setBirdsCart }) {
  return (
    <div className="card">
      <h3>{bird.name}</h3>
      <p>Price: ${bird.amount}</p>
      <img src={bird.img} height="140" width="140"></img>
      <br />
      <button
        onClick={() => {
          if (!birdsCart.find((e) => e.id === bird.id)) {
            setBirdsCart([...birdsCart, bird]);
          } else {
            alert("You have already added this bird to the cart");
          }
        }}
        className="adopt"
      >
        Adopt
      </button>
    </div>
  );
}
