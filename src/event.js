import React from "react";

// import component Header

function Event() {
  //create new function here
  function Greeting() {
    return alert("Pagi maniez");
  }
  return (
    //   Code Here
    <div>
      <p>click this button to show an alert</p>
      <button onClick={() => alert("Hi maniez")}>Click Here</button>

      <p>click this button to show an alert</p>
      <button onClick={Greeting}>Greeting</button>
    </div>
  );
}

// Create a new component here

export default Event;
