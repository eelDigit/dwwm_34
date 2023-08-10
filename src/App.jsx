import React from "react";
import Personne from "./Personne";
import Horloge from "./Horloge";

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
// -------------------------------------------------------------------
// function app() {
//   return (
//     <>
//       <Horloge />
//       <Personne nom="joe" age="31" sex="homme" />
//       <Personne nom="jacques" age="25" sex="homme" />
//       <Personne nom="janne" age="20" sex="femme" />
//     </>
//   );
// }

// export default app;
// -------------------------------------------------------------------
// ccs
class App extends React.Component {
  bonjour(prenom) {
    console.log("bonjour" + prenom);
  }
  ditBonjour(prenom) {
    console.log("dit Bonjour " + prenom);
  }

  salut = () => {
    console.log("salut ");
  };

  ageHandler(e) {
    // console.log(e.target);
    // console.log(this.state.personnes);

    // this.state.personnes[0].age++;
    // this.state.personnes[1].age++;
    // this.state.personnes[2].age++;

    const newPersonnes = [...this.state.personnes];

    // console.log(newPersonnes);
    // newPersonnes[0].age++;
    // newPersonnes[1].age++;
    // newPersonnes[2].age++;

    newPersonnes.map((personne) => {
      return personne.age++;
    });

    this.setState({ personnes: newPersonnes });
  }

  state = {
    personnes: [
      { nom: "joe", age: "31", sex: "homme" },
      { nom: "jacques", age: "25", sex: "homme" },
      { nom: "janne", age: "20", sex: "femme" },
    ],
  };
  render() {
    return (
      <>
        <Horloge />
        <p>
          <button onClick={() => this.bonjour(" joe")}>Bonjour</button>
          <button onClick={this.salut}>Salut</button>
          <button onClick={this.ditBonjour.bind(this, "jacques")}>
            envoyer
          </button>
          <br />
          <button onClick={(e) => this.ageHandler(e)}>Age</button>
        </p>

        <Personne
          nom={this.state.personnes[0].nom}
          age={this.state.personnes[0].age}
          sex={this.state.personnes[0].sex}
        />
        <Personne {...this.state.personnes[1]} />
        <Personne {...this.state.personnes[2]} />
      </>
    );
  }
}

export default App;
