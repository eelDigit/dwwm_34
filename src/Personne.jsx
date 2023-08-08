// function Personne() {
//   return (
//     <>
//       <h1>coucou les amis</h1>
//       <p>Comment vas ? </p>
//       <p>Comment vas ? </p>
//     </>
//   );
// }

// export default Personne;

import React from "react";

// const Personne = (props) => {
//   return (
//     <div>
//       <h1> {props.nom} </h1>
//       <p>Age: {props.age}</p>
//       <p>Sex: {props.sex} </p>
//     </div>
//   );
// };

// export default Personne;

// function Personne(props) {
//   return (
//     <div>
//       <h1> {props.nom} </h1>
//       <p>Age: {props.age}</p>
//       <p>Sex: {props.sex} </p>
//     </div>
//   );
// }
// export default Personne;

class Personne extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <h1> {this.props.nom} </h1>
        <p>Age: {this.props.age}</p>
        <p>Sex: {this.props.sex} </p>
      </div>
    );
  }
}
export default Personne;
