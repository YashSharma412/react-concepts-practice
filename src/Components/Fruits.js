import React, { useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");

  function Addfruit(e) {
    e.preventDefault();
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  }

  return (
    <div className="page_section">
      <form onSubmit={Addfruit}>
        <input
          type="text"
          placeholder="Enter fruit name"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>{fruits.join(", ")}</div>
    </div>
  );
};

export default Fruits;
