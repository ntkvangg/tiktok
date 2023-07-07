import { memo } from "react";

const Counter = ({ onIncrease }) => {
    console.log("counter");
    return (
        <>
            <h2>Counter</h2>
            <button onClick={onIncrease}>Increase</button>
        </>
    );
};

export default memo(Counter);
