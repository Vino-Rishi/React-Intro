import React from 'react'

function handleChange(){
  const myInfo = ["Full-Stack Developer","UI/UX Designer","Data Engineer"];
  const int = Math.floor(Math.random()*3);
  return (myInfo[int]);
}
const Garage = () => {
  return (
    <>
    <h1>Who are you?</h1>
    <h3>I am a {handleChange()}</h3>
    
    </>
  );
}

export default Garage