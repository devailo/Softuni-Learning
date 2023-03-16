import { useState } from "react";

const getTitle = (count) => {
    switch (count) {
        case 0:
            return "No kills yet"
        case 1:
            return "First Blood"
        case 2:
            return "Double Kill"

        default:
            return "Too Many Kills";
    }
}

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const onClickIncrement = (e) => {
        setCounter(count => count + 1);
    }

    const onClickReset = (e) => {
        setCounter(0);
    }

    const currentTitle = getTitle(counter)

    return (
        <div>
            <h2>Counter Demo</h2>
            <h3>Counter: {counter}</h3>
            <h3>KillStreak: {currentTitle}</h3>
            <button onClick={onClickReset}>Reset</button>
            <button onClick={onClickIncrement}>+</button>
        </div>
    )
}

export default Counter;