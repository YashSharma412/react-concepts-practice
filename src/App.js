import React from "react";
import Home from "./Components/Home";
import Basic from "./Components/Basic";
import CounterApp from "./Components/CounterApp";
import Fruits from "./Components/Fruits";
import LazyInitialization from "./Components/LazyInitialization";
import Async_Nature from "./Components/Async_Nature";
import UseEffect from "./Components/UseEffect";
import LiveTyping from "./Components/LiveTyping";
import LearnApis from "./Components/LearnApis";
import Parent from "./Components/Parent";
import UseContextPrac from "./Components/UseContextPrac";
import CricketProvider from "./context/CircketProvider"
import ReactRoute from "./Components/ReactRoute";

import {Routes, Route} from "react-router-dom"
const App = () => {

  return (
    <div className="App">
      <ul className="TOC_sidebar">
        <li><a href="/">Home</a></li>
        <li><a href="/Basic">Basic</a></li>
        <li><a href="/CounterApp" >CounterApp</a></li>
        <li><a href="/Fruits">Fruits</a></li>
        <li><a href="/LazyInitialization">LazyInitialization</a></li>
        <li><a href="/Async_Nature">Async_Nature</a></li>
        <li><a href="/UseEffect">UseEffect</a></li>
        <li><a href="/LiveTyping">LiveTyping</a></li>
        <li><a href="/LearnApis">LearnApis</a></li>
        <li><a href="/Parent">Parent</a></li>
        <li><a href="/UseContextPrac">UseContextPrac</a></li>
        <li><a href="/CricketProvider">CricketProvider</a></li>
        <li><a href="/ReactRoute">ReactRoute</a></li>
      </ul>
      <div className="article_main">
        <Routes>
          < Route path="/" element={<Home/>} />
          < Route path="/Basic" element={<Basic />} />
          < Route path="/CounterApp" element={<CounterApp />} />
          < Route path="/Fruits" element={<Fruits />} />
          < Route path="/LazyInitialization" element={<LazyInitialization />} />
          < Route path="/Async_Nature" element={<Async_Nature />} />
          < Route path="/UseEffect" element={<UseEffect />} />
          < Route path="/LiveTyping" element={<LiveTyping />} />
          < Route path="/LearnApis" element={<LearnApis />} />
          < Route path="/Parent" element={<Parent />} />
          < Route path="/UseContextPrac" element={<UseContextPrac />} />
          < Route path="/CricketProvider" element={<CricketProvider />} />
          < Route path="/ReactRoute" element={<ReactRoute />} />
        </Routes>
      </div>

    </div>
  );
};

{/* <Basic />
<hr /><hr />
<Fruits />
<hr /><hr />
<LazyInitialization />
<hr /><hr />
<CounterApp />
<hr /><hr />
<Async_Nature />
<hr /><hr />
<UseEffect />
<hr /><hr />0
<LiveTyping />

<hr /><hr />
<LearnApis />

<hr /><hr />
<Parent />

<hr /><hr />
<UseContextPrac /> 
<CricketProvider>
<UseContextPrac/>
</CricketProvider>

<hr />
<hr />
<ReactRoute />  */}
export default App;