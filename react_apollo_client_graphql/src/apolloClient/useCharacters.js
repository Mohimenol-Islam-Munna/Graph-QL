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

const useCharacters = () => {
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: {
      withName: true,
      pollInterval: 500,
    },
  });

  return {
    loading,
    error,
    data,
    refetch
  };
};

export default useCharacters;
