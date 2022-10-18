// import {useState} from "./react";
import {birdData}from ".src/data/birds";
// import {checkout} from "./src/checkout";



function App () {
 


 
    const [bird, setBird] = useState(birdData)
    
    
    const [newbirds,setnewBirds]= useState ({

img: "",
name: "",
amount: "",
id: "",
  
 
    });
  
  }
<form onSubmit={handleSubmit}>
  <label htmlFor="first name">First name:</label>
  <input
  type="text"
  value={user.firstName}
  onChange={handleTextChange}
id="firstName"

  />
  <label htmlFor="lastName">Last name: </label>
  <input
  type="text"
  value={user.lastName}
  onchange={handleTextChange}
  id="lastName"
  />
  <label htmlFor="zip">Zip code:</label>
  <input type="number" value={user.zip} onChange={handleTextChange} id="zip"/>
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    value={user.email}
    onChange={handleTextChange}
    id="email"
    />
    <input type="submit"/>



</form>

  





  

    // <div>
    //   <h1>Hello, world!</h1>
    // </div>
  


export default App;
