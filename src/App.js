import React, { useState } from "react";
import Form from "./components/Form";
import Cards from "./components/Cards";
 import Cart from "./components/Cart";
import "./index.css"



function App() {
  const [birds, setBirds] = useState([]);
  const [form, setForm] = useState({
firstName: "",
lastName: "",
email: "",
zipCode: "",
  });

  return (
    <>
    <div className="card">
      <h1>Hello, world!</h1>
 
     <Form setBirds={setBirds} setForm={setForm}/>
     </div>

     <div className="card">
        <Cart birds={birds} setBirds={setBirds}/>
   </div>
  
  <div className="card">
        <Cards
           birds={birds}
          setBirds={setBirds}
          />
   </div>
   </>
  );
};


export default App;