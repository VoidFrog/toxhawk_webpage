import React from "react";
import styles from "./collaborators.module.css";
import CollaboratorTile from "../CollaboratorTile/CollaboratorTile";

function Collaborators() {
  const generateCollaboratorTiles = (collaborators: any) => {
    let elems = collaborators.map((collaboratorData: any) => {
      return <CollaboratorTile key={crypto.randomUUID()} />;
    });

    let triplets: any = [];
    while (elems.length >= 3) {
      triplets.push(elems.splice(elems.length - 3, 3));
      console.log(triplets.length, elems.length);
    }
    if (elems.length > 0 && elems.length < 3) triplets.push(elems);
    return triplets.map((triplet: any) => {
      return (
        <div className={styles.collaborators_wrapper}>
          {triplet.map((e: any) => e)}
        </div>
      );
    });
  };

  return (
    <div className={styles.collaborators_container}>
      <p>Partnerzy</p>
      {generateCollaboratorTiles([1, 2, 3, 4, 5])}
    </div>
  );
}

export default Collaborators;
