import React, { createContext } from "react";
const CricketContext = createContext(); //cricketContext objects

export default CricketContext;
/*

    cricketContext = {
        Provider : (This key is a Compenent provided by react), 
        Consumer : (it is also a Compenent),
    }

    Provider: helps to add values to the object
    Consumer : helps to Access values from the object
*/