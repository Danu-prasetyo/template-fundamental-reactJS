import React from "react";

// import component Header
import Header from "./components/header";
import { Footer } from "./components/footer";

function Component() {
  return (
    //   Code Here
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

//bikin component didalem satu file
// Create a new component here
function Content() {
  return (
    <div>
      <h1>This is content</h1>
    </div>
  );
}

export default Component;
