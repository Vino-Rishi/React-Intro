import React from 'react'
import {useState,useContext,createContext} from 'react';

const UserContext = createContext();

const NestedComponents = () => {
const [user] = useState("Coders");

  return (
    <>
    <UserContext.Provider value = {user}>
    <h1>{`Hello ${user}!`}</h1>
    <Components2 />
    </UserContext.Provider>
    </>
  )
}
const Components2 = ()=> {
return (
    <>
    <h1>2nd Component</h1>
    <Components3 />
    </>
);
}
const Components3 = ()=> {
    return (
        <>
        <h1>3rd Component</h1>
        <Components4 />
        </>
    );
    }
    const Components4 = ()=> {
        return (
            <>
            <h1>4th Component</h1>
            <Components5 />
            </>
        );
        }
        const Components5 = ()=> {
            const userName = useContext(UserContext);
            return (
                <>
                <h1>5th Component</h1>
                <h2>{`Hello ${userName} Once again!`}</h2>
                </>
            );
            }
export default NestedComponents