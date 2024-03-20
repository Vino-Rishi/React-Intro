import React, { useCallback, useState } from 'react'
import Todo from './Todo'


const CallbackTodo = () => {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);

    const increment = () =>{
        setCount((c)=> c + 1);
    };
    const addTodo = useCallback(()=>{
        setTodos ((t)=>[...t,"New Todo"]);
    },[]);
  return (
    <>
    <Todo />
    <Todo todos={todos} addTodo={addTodo} />
    <hr />
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
    </div>
  </>
  );
}


export default CallbackTodo