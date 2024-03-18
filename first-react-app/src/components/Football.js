import React from 'react'

const Football = () => {
    const shoot = (a)=>{
        alert(a);
    }
  return (
    <button onClick={()=> shoot("www.balachandra.in")}>Check Website</button>
  );
}

export default Football