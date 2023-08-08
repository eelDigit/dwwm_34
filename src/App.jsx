import React from "react";
import Personne from "./Personne";

// function app() {
//   return <h1>coucou les amis </h1>;
// }

// export default app;

// -------------[composant type class]-------------------
// class App extends Component {
//   render() {
//     return <h1>coucou les amis </h1>;
//   }
// }

// export default App;
// ------------------------------------------------------------

// function app() {
//   return (
//     // retourne du code JSX
//     <>
//       <h1>coucou les amis</h1>
//       <p>Comment vas ? </p>
//       <p>Comment vas ? </p>
//     </>
//   );
// }

// export default app;

function app() {
  return (
    <>
      <Personne nom="joe" age="31" sex="homme" />
      <Personne nom="jacques" age="25" sex="homme" />
      <Personne nom="janne" age="20" sex="femme" />
    </>
  );
}

export default app;
