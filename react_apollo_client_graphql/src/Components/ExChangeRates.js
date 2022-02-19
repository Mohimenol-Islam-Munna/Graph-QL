import { useQuery, gql } from "@apollo/client";

// query
const GET_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        gender
      }
    }
  }
`;

const ExchangeRates = () => {
  // fetch data using useQuery hook
  const { loading, error, data } = useQuery(GET_CHARACTER);

  console.log("character list from graphqpl :::", { loading, error, data });

  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
      }}
    >
      {data &&
        data.characters.results.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid salmon",
              margin: "5px",
              borderRadius: "10px",
            }}
          >
            <h4>{item.name}</h4>
            <p>{item.gender}</p>
          </div>
        ))}
    </div>
  );
};

export default ExchangeRates;
