import React,{useState} from "react";

const LazyInitialization = ()=>{
    function hello(){
        console.log("hello")
        return 0
    }
    // const [count, setCount] = useState(()=>{
    //     console.log("hello")
    //     return 0;
    // });

    const [count, setCount] = useState(()=>hello())
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default LazyInitialization;