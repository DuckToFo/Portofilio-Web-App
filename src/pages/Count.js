import React from 'react';
import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <button onClick={clickHandler}>Count Setter</button>
            <span>Click to add count: {count}.</span>
        </div>
    );
};

export default Count;
