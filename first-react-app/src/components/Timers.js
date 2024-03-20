import React from 'react'
import {useState,useEffect} from 'react'

const Timers = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count + 1)
        },1000)
    },[count]);
  return (
    <>
    <h1>I've rendered {count} times!</h1>
    </>
  )
}

export default Timers