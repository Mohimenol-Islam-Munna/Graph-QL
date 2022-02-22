import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCharacters from "../apolloClient/useCharacters";

const CharactersHome = () => {
  const navigate = useNavigate();
  const { loading, data, refetch } = useCharacters();

  if (loading) {
    return <h5>Loading...</h5>;
  }

  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <div>
        <button onClick={() => navigate(-1)} className="btn btn-warning mx-2">
          GoBack
        </button>
        <button onClick={() => refetch()} className="btn btn-success mx-2">
          Refetch
        </button>
      </div>
      {data &&
        data.characters.results.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid salmon",
              margin: "5px",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <h4>{item.name}</h4>
            <p>{item.gender}</p>
            <div>
              <img src={item.image} alt="chareacter"/>
            </div>
            <div style={{ margin: "20px auto" }}>
              <Link to={`${item.id}`}>Details</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CharactersHome;
