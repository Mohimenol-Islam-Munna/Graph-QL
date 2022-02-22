import { gql, useSubscription } from "@apollo/client";

const ORDER_SUBSCRIPTION = () => gql`
  subscription {
    productCreated {
      name
      quantityPerUnit
    }
  }
`;

const useOrderSubscription = () => {
  const { loading, error, data } = useSubscription(ORDER_SUBSCRIPTION);

  return {
    loading,
    error,
    data,
  };
};

export default useOrderSubscription;
