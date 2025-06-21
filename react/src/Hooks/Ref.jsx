import React, { useEffect, useState, useRef } from 'react'

const Ref = () => {
    const [count,setCount] = useState(0);
    const value = useRef(0)
    const handleIncrement = ()=>{
        setCount(count+1)
    }
    useEffect(() =>{
        //console.log("Count changed");
    })
    const handleValueIncrement = ()=>{
        value.current=value.current+1;
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>increment</button>
        <h1>{value.current}</h1>
        <button onClick={handleValueIncrement}>increment value</button>
    </div>
  )
}

export default Ref