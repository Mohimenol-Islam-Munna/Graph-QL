import React from "react";
import { GET_CHARACTERS } from "../../apolloClient/queries/characters";
import { client } from "../_app";

const Characters = ({ characters }) => {
  console.log("data comes from graphql server in component  ::", characters);

  return (
    <div>
      <div
        style={{
          width: "60%",
          border: "1px solid salmon",
          padding: "10px",
          borderRadius: "10px",
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        <h2>All Characters</h2>
      </div>

      {characters &&
        characters.map((character) => (
          <div
            key={character.id}
            style={{
              width: "60%",
              border: "1px solid palegreen",
              padding: "20px",
              borderRadius: "10px",
              margin: "20px auto",
              textAlign: "center",
            }}
          >
            <h3>Name : {character.name}</h3>
            <h5>Email : {character.gender}</h5>
            <h5>Phone : {character.origin && character.origin.name}</h5>
          </div>
        ))}
    </div>
  );
};

// prerendering
export const getStaticProps = async () => {
  const { data } = await client.query({ query: GET_CHARACTERS });

  return {
    props: { characters: data.characters.results },
  };
};

export default Characters;
