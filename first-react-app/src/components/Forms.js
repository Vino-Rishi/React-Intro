import React from 'react'
import {useState} from 'react'


const Forms = () => {
    const [name,setName] = useState("");

    const handleSubmit = (event)=> {
        event.preventDefault();
        alert(`You entered name was: ${name}`)
        }

  return (
    <form>
        <label>Enter Your Name: <br></br>
        <h3>{name}</h3>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </label> 
        <button onClick={handleSubmit}>Submit</button>
        </form>
  );
}

export default Forms