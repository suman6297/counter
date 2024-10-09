import React, { useState } from 'react';
import "./counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
           
            <div className='countbutton'>
            <button onClick={() => setCount(count + 1)} className='count'>Increment</button>
            <h1 className='counter'>Count: {count}</h1>
            <button onClick={() => setCount(count - 1)} className='count1'>Decrement</button>
            </div>
       
        </div>
    );
};

export default Counter;
