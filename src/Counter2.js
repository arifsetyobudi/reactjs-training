import { useState } from "react";

export function Counter2(props) {
    const [count, setCount] = useState(0);

    return <div>
        Count : {count}<br />
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>;
}