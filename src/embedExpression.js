import React from "react";

function EmbedExpression() {
  //Create function here
  function getBatch() {
    return "Welcome to batch 30";
  }

  //Create a variable here
  const companyName = "Danu.id";

  return (
    // Code Inside div
    <div>
      <p>Welcome to {companyName} Class</p>
      {getBatch()}
    </div>
  );
}

export default EmbedExpression;
