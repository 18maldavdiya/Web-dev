import React from 'react'
import { useState } from 'react'
import './Style.css'
function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
        if(count ===0){
            setCount(0)
        }
    }
    return (
        <div className='container'>
            <h2 className='form' >{count}</h2>
            <button type="button" className="btn-text theme-success" onClick={increment}>Increment</button>
            
            <button type="button" className="btn-text theme-danger" onClick={decrement}>Decrement</button>
            <button type="button" className="btn-subtle theme-info" onClick ={() =>setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter
