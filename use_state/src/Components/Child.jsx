import React from 'react'

export const Child = ({props, sendFunc}) => {

  return (
    <>
      <h1>Child.jsx have this props {props}</h1>
      <button onClick={sendFunc}>Child btn</button>
    </>
  );
}

