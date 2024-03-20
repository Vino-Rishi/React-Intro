import React from 'react'
import {useState, useEffect, useRef} from 'react'

const Previousrender = () => {
    const [inputValue,setInputValue] = useState("");
    const previousInputValue = useRef(0);

    useEffect(()=>{
        previousInputValue.current = inputValue;
    },[inputValue]);
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <h1>Current Value: {inputValue} </h1>
        <h1>Previous Value: {previousInputValue.current}</h1>
    </div>
  );
}

export default Previousrender