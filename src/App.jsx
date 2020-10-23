import React, { useState } from "react";

const App = () => {

  const [name, valname]= useState('');
  const [valbef, valaft]= useState();

  const chang = (event) => {
    valname(event.target.value);
  };
  const change=()=>{
    valaft(name);
  }

  return(
    <>
      <div>
        <h1>Hello {valbef}</h1>
        <input 
          type="text"
          placeholder="Enter Your Name"
          onChange={chang}
          value={name}
        />
        <button onClick={change}>Click Me</button>
      </div>
    </>
  );

};
export default App;