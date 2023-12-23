// fetch
import React, { useState } from "react";
import axios from "axios";

const LearnApis = () => {
  const [num1, SetNum1] = useState(0);
  const [num2, SetNum2] = useState(0);
  //   console.log(num1, num2)

  //  get api syntax using fetch
  function getApi1() {
    fetch("http://localhost:5000/hello")
      .then((responseObj) => responseObj.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err, "Unable to fetch api"));
  }
  // getApi1();

  //   get api syntax using axios.
  function getApi2() {
    axios
      .get("http://localhost:5000/hello")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err, "error occured"));
  }
  //   getApi2()

  //   post api syntax using axios
  function calculateSum1(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/sum", {
        num1: num1,
        num2: num2,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  //   post api syntax using fetch
  function calculateSum2(e) {
    e.preventDefault();

    fetch("http://localhost:5000/sum", {
      method: "POST",
      headers: {
        // notifies fetch that the data send is in the json format/datatype
        "content-type": "application/json",
      },
      body: JSON.stringify({
        num1: num1,
        num2: num2,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <p>Sum of numbers</p>
      <form onSubmit={calculateSum1}>
        <div>
          <label htmlFor="num1">Number 1</label>
          <input
            type="number"
            id="num1"
            onChange={(e) => SetNum1(e.target.value)}
            value={num1}
          />
        </div>
        <div>
          <label htmlFor="num2">Number 2</label>
          <input
            type="number"
            id="num2"
            onChange={(e) => SetNum2(e.target.value)}
            value={num2}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p id="answer">{}</p>
    </div>
  );
};

export default LearnApis;
