// Code Here
import React from "react";

//cara pertama
// function List({ name, email, ...data }) {
//   return (
//     //   Code Here
//     <div>
//       <ul>
//         <li>{name}</li>
//         <li>{email}</li>
//         <input {...data} />
//       </ul>
//     </div>
//   );
// }

//cara kedua
function List(props) {
  return (
    //   Code Here
    <div>
      <ul>
        <li>{props.carName}</li>
      </ul>
    </div>
  );
}

// Create a new component here

export default List;
