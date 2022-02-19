import useCharacter from "../apolloClient/useCharacter";
import { useParams } from "react-router-dom";

const Character = () => {
  const params = useParams();
  const { loading, error, data } = useCharacter(params.id);

  console.log("params ::", params);

  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
      }}
    >
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
          <img src={data.character.image} />
        </div>
      )}
    </div>
  );
};

export default Character;
