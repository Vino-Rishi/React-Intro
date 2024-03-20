import React from 'react'
import {useState,useEffect} from 'react'

const ClearTimer = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
       let Timer = setTimeout(()=>{
            setCount((count)=>count + 1)
        },1000);
        return ()=> clearTimeout(Timer)
    },[]);
  return (
    <>
    <h1>I've rendered {count} times!</h1>
    </>
  )
}

export default ClearTimer