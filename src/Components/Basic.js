import React from "react";
import { useState } from "react";
// this will only log updated myVar as it has normal variable and not a useState
// const Basic = ()=>{
//     let myVar = 24;

//     function incriment() {
//         myVar++;
//         console.log(myVar);
//     }
//     return (

//         <div className="basics__section page_section">
//             <h2>A.  The value increments on Button Click</h2>
//             <div className="output_display">{myVar}</div>
//             <button onClick={incriment}>Click To Incriment</button>
//         </div>
//     )
// }

let x = 10;

const Basic = () => {
  let [myVar, updateVarfun] = useState(24);
  // let [a,b] = useState(a_Val)
  function incriment() {
    updateVarfun(myVar+1); // not to use ++count
    console.log(myVar);
  }

  function incriment_x() {
    x = x + 1;
    console.log(x);
  }

  return (
    <div className="basics__section page_section">

      <h2>A. The value increments on Button Click</h2>
      <div className="output_display">
        <h2>{myVar}</h2>
      </div>
      <button onClick={incriment}>Click To Incriment</button>

      <div className="output_display">
        <h2>{x}</h2>
      </div>
      <button onClick={incriment_x}>Click To Incriment</button>
    
    </div>
  );
};

export default Basic;
