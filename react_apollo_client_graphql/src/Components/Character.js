import React from "react";
import useCharacter from "../apolloClient/useCharacter";
import { useParams, useNavigate } from "react-router-dom";

const Character = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { loading, data } = useCharacter(params.id);

  const goBackHandler = () => {
    console.log("go back handler");
    navigate(-1);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
      }}
    >
      <h3>Single Character</h3>
      <button onClick={goBackHandler} className="btn btn-warning mx-2">
        GoBack
      </button>

      {data && (
        <div
          key={data.character.id}
          style={{
            border: "1px solid salmon",
            margin: "5px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <h4>{data.character.name}</h4>
          <p>{data.character.gender}</p>
          <img src={data.character.image} alt="character data"/>
        </div>
      )}
    </div>
  );
};

export default Character;
