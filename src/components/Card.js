export default function Card({
  bird,
  birdsCart,
  setBirdsCart,
  total,
  setTotal,
  discount,
}) {
  const updateTotal = () =>
    setTotal(
      //   discount ? (total + bird.amount) * (100 - discount) /100 : total + bird.amount
      total + bird.amount
    );

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
            updateTotal();
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
