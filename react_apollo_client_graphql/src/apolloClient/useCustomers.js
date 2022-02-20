import { gql, useLazyQuery } from "@apollo/client";

const GET_ALL_CUSTOMERS = gql`
  query {
    viewer {
      employeeList {
        employeeID
        firstName
        lastName
        title
        address {
          city
          country
        }
      }
    }
  }
`;

const useCustomer = () => {
  const [fetchCustomersData, { loading, error, data }] = useLazyQuery(
    GET_ALL_CUSTOMERS,
    { fetchPolicy: "cache-first" }
  );

  return [
    fetchCustomersData,
    {
      loading,
      error,
      data,
    },
  ];
};

export default useCustomer;
