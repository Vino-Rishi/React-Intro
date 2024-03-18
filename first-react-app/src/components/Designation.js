import React from 'react'

function Role(props) {
    return <li>I am a {props.role}</li>
}
const Designation = () => {
    const Roles = [
        {id:1,designation:"Software Developer"},
        {id:2,designation:"UI/UX Designer"},
        {id:3,designation:"Data Engineer"},
] 
  return (
    <>
    <h2>Who you're to this company</h2>
    <ul>
        {Roles.map((role)=> <Role Key ={role.id} role = {role.designation} />)}
    </ul>
    </>
  );
}


export default Designation