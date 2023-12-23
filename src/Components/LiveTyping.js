import React, { useState } from "react";

const LiveTyping = () => {
  let [inputTxt, setInputTxt] = useState("");
  function getValue(e) {
    // console.log(e.target.value);
    setInputTxt(e.target.value);
  }
  return (
    <div className="LiveTyping">
      <h1 className="section_header">Live Typing Exercise</h1>
      <form>
        <input type="text" onChange={getValue} placeholder="Type anything..." />
      </form>
          <p className="output_display">{inputTxt}</p>
    </div>
  );
};

export default LiveTyping;
