import React, { useState } from "react";

// import component

function State() {
  const [counter, setCounter] = useState(0);

  function Add() {
    setCounter(counter + 1);
  }
  function Less() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    //   Code Here
    <div>
      <h1>{counter}</h1>
      {/*<button onClick={() => setCounter(counter + 1)}>Click Here</button>*/}
      <button onClick={Add}>+ Add</button>
      <button onClick={Less}>- Less</button>
    </div>
  );
}

export default State;
