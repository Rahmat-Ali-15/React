import React from "react";

export const Child = (props) => {
    return(
        <>
            <h1>Child {props.counts.count}</h1>
            <button onClick={props.counts.increaseCount}>+</button>
            <button onClick={props.counts.decreaseCount}>-</button>
        </>
    )
}