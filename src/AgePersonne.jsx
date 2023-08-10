import React from "react";

const AgePersonne = (props) => {
  let maintenant = new Date();
  let annee = maintenant.getFullYear();
  // console.log(annee);
  return (
    <div>
      Age : {props.age} - ({annee - props.age})
    </div>
  );
};

export default AgePersonne;
