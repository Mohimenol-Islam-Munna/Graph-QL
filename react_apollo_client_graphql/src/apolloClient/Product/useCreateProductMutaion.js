import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $supplierID: Float!
    $categoryID: Float!
    $quantityPerUnit: String!
  ) {
    createProduct(
      record: {
        name: $name
        supplierID: $supplierID
        categoryID: $categoryID
        quantityPerUnit: $quantityPerUnit
      }
    ) {
      record {
        name
        supplierID
        categoryID
        quantityPerUnit
      }
    }
  }
`;

const useCreateProductMutaion = () => {
  const [createProductHandler, { loading, error, data }] =
    useMutation(CREATE_PRODUCT);

  return {
    createProductHandler,
    loading,
    error,
    data,
  };
};

export default useCreateProductMutaion;
