import React from "react";
import Basic from "./Components/Basic";
import CounterApp from "./Components/CounterApp";
import Fruits from "./Components/Fruits";
import LazyInitialization from "./Components/LazyInitialization";
import Async_Nature from "./Components/Async_Nature";
import UseEffect from "./Components/UseEffect";
import LiveTyping from "./Components/LiveTyping";
import LearnApis from "./Components/LearnApis";

const App = () => {

  return (
    <div>
      <h1 className="page_header">React Concepts Practice</h1>
      <Basic />
      <hr /><hr />
      <Fruits />
      <hr /><hr />
      <LazyInitialization />
      <hr /><hr />
      <CounterApp />
      <hr /><hr />
      <Async_Nature />
      {/* <hr /><hr />
      <UseEffect /> */}
      <hr /><hr />
      <LiveTyping />

      <hr /><hr />
      <LearnApis />
    </div>
  );
};

export default App;
