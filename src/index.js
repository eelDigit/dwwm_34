import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// ReactDOM.render("coucou", document.getElementById("root"));
// ReactDOM.render(<h1>Coucou</h1>, document.getElementById("root"));

// ReactDOM.render(
//   React.createElement("h1", null, "coucou"),
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <h1 className="titre" >
//     <p>coucou</p>
//   </h1>,
//   document.getElementById("root")
// );

// ----------------------------
// const element = <h1> coucou </h1>;

// ReactDOM.render(element, document.getElementById("root"));

// --------------------------------

// const element = <App />;

ReactDOM.render(<App />, document.getElementById("root"));
