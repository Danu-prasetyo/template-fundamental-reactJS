import React, { useState } from "react";

// create component PrivatePage
function PrivatePage(props) {
  return (
    <div>
      <h1>Welcome User</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
}

// create component GuestPage
function GuestPage(props) {
  return (
    <div>
      <h1>Please Sign In</h1>
      <button onClick={props.login}>Login</button>
    </div>
  );
}

function ConditionRenderin() {
  //init state
  const [isLogin, setIsLogin] = useState(false);
  return (
    //   Code Here
    <div>
      {/*conditional logic rendering*/}
      {isLogin ? <PrivatePage logout={() => setIsLogin(!isLogin)} /> : <GuestPage login={() => setIsLogin(!isLogin)} />}
    </div>
  );
}

export default ConditionRenderin;
