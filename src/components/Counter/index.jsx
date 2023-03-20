import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }
    return(
        <>
        <h2>{count}</h2>
        <button onClick={incrementCount}>Add</button>
        </>
    )
}

export default Counter;