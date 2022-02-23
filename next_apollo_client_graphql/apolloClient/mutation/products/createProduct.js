import { gql } from "@apollo/client";

export const CREATE_PRODUCTS = gql`
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
