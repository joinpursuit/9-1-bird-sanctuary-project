import { useState } from "react";

function Checkout({resetCart}) {
  const [checked, setChecked] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  const [nickName, setNickName] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    zp: "",
    email: "",
    password: "",
  });

  function handleCheckboxChange() {
    setChecked(!checked);
  }
  function handleNickNameChange(event) {
    setNickName(event.target.value);
  }

  function handleSelectChange(event) {
    console.log(event.target.value);
    setSelectOption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('You have adopted birds. Thank you!')
    resetForm();
    resetCart();
  }

  function handleTextChange(event) {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
  }

  function resetForm() {
    setUser({
      firstName: "",
      lastName: "",
      zip: "",
      email: "",
      password: "",
    });
  }
  return (
    <div>
      
      <main>
       
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            value={user.firstName}
            onChange={handleTextChange}
            id="firstName"
          />
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            value={user.lastName}
            onChange={handleTextChange}
            id="lastName"
          />
          <label htmlFor="zip">Zip code:</label>
          <input
            type="number"
            value={user.zip}
            onChange={handleTextChange}
            id="zip"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={handleTextChange}
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={handleTextChange}
            id="password"
          />
          <br />
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}

export default Checkout;