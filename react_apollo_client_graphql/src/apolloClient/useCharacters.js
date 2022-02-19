import { gql, useQuery } from "@apollo/client";

// query
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        gender
        image
      }
    }
  }
`;

const useCharacters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  return {
    loading,
    error,
    data,
  };
};

export default useCharacters;
