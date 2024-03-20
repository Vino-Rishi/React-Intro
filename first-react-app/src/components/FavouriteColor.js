import React from 'react'
import { useState } from 'react';

const FavouriteColor = () => {
    const [Color,setColor] = useState("White")

  return (
    <>
        <h1 style={{color:Color}}> My Favourite Color is {Color}!</h1>
        <section className='App-btn'>
        <button type="button" className='btn5' onClick={()=> setColor("Red")}>Red</button>
        <button type="button" className='btn1' onClick={()=> setColor("Blue")}>Blue</button>
        <button type="button" className='btn2' onClick={()=> setColor("Green")}>Green</button>
        <button type="button" className='btn3' onClick={()=> setColor("Violet")}>Violet</button>
        <button type="button" className='btn4' onClick={()=> setColor("Pink")}>Pink</button>
        </section>
        <br />
    </>
  );
}

export default FavouriteColor