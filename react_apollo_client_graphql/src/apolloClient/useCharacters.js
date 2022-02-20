import { gql, useQuery } from "@apollo/client";

// query
const GET_CHARACTERS = gql`
  query MallQ($withName: Boolean!) {
    characters {
      results {
        id
        name @include(if: $withName)
        gender
        image
      }
    }
  }
`;

const useCharacters = (g) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      withName: true,
    },
  });

  return {
    loading,
    error,
    data,
  };
};

export default useCharacters;
