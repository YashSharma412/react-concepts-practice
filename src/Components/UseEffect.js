import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [copper, setCopper] = useState(0);

  // document.title = ``
  useEffect(() => {
    console.log("gold added");
  }, [gold]);

  useEffect(() => {
    console.log("silver added");
  }, [silver]);

  useEffect(() => {
    console.log("copper added");
  }, [copper]);

  return (
    <div>
      <h1 className="section_header">UseEffect Concept</h1>
      <p className="output_display">
        gold: {gold} silver: {silver} copper: {copper}
      </p>
      <button onClick={() => setGold(gold + 1)}>Add Gold</button>
      <button onClick={() => setSilver(silver + 1)}>Add Silver</button>
      <button onClick={() => setCopper(copper + 1)}>Add Copper</button>
    </div>
  );
};

export default UseEffect;
