import React, {useState} from "react";
import CricketContext from "./CricketContext";

const CricketProvider = (props)=>{
    let name = "Yash Sharma"
    return (
        <CricketContext.Provider value={name}>
            {props.children}
        </CricketContext.Provider>
    )
}

export default CricketProvider;