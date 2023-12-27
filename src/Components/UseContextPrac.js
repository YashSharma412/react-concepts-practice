import React, {useContext} from "react";
import CricketContext from "../context/CricketContext";
const UseContextPrac = () => {

  let name =  useContext(CricketContext)
  return (
    <div>
      <h1>Use Context concept</h1>
      <h3>hello {name}</h3>
      <p>
        We create a global variable and access and update it in multiple other
        components
      </p>
      <p>
        while using context in a project , it is advisible to have a seperate
        folder named 'context' similar to the 'components' folder.{" "}
      </p>
      <p>Three steps to creating an object: </p>
      <ol>
        <li>create an object which is global in nature(empty object)</li>
        <li>add value to the object</li>
        <li>access the value of this global object</li>
      </ol>
    </div>
  );
};

export default UseContextPrac;
