import { gql, useLazyQuery } from "@apollo/client";

const GET_ALL_CUSTOMERS = gql`
  query {
    viewer {
      customer {
        customerID
        companyName
        contactName
      }
    }
  }
`;

const useCustomer = () => {
  const [fetchCustomersData, { loading, error, data }] =
    useLazyQuery(GET_ALL_CUSTOMERS);

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
