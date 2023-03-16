import { useState } from 'react';

const Timer = (props) => {

    const [seconds, setSeconds] = useState(props.start);

    setTimeout(() => {
        // setSeconds(seconds + 1)
        setSeconds(state => state + 1)
    }, 1000)

    return (
        <div>
            <h2>Timer Demo</h2>
            Time: {seconds}s
        </div>
    )
}

export default Timer;