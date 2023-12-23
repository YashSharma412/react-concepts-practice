import React, {useState} from "react";

const CounterApp = ()=>{

    const [count, setCount] = useState(0    )

    function increment() {
        setCount(count+1);
        console.log(count)
    }
    return (
        <div className="Counter-App">
            <h1 className="page_header">Counter App</h1>
            <center><div className="output_display">
                <h2>{count}</h2>
            </div></center>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={()=>{setCount(count-1)}}>Decrement</button>
                <button onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default CounterApp;