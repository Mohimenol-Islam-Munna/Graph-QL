import React, { useRef } from "react";
import { client } from "../_app";
import { CREATE_PRODUCTS } from "../../apolloClient/mutation/products/createProduct";

const CreateProduct = ({ product }) => {
  // catch form field data by useRef
  const productName = useRef();
  const supplierID = useRef();
  const categoryID = useRef();
  const quantityPerUnit = useRef();

  console.log("after create product mutation :::", product);

  const submitHandler = (e) => {
    e.preventDefault();

    let data = {};

    data.productName = productName.current.value;
    data.supplierID = parseInt(supplierID.current.value);
    data.categoryID = parseInt(categoryID.current.value);
    data.quantityPerUnit = quantityPerUnit.current.value;
  };

  return (
    <div
      style={{
        width: "50%",
        margin: "20px auto",
        border: "1px solid salmon",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h4 className="text-center">Create Product Page</h4>
      <div className="my-4">
        <form onSubmit={submitHandler}>
          <div className="form-group mb-2">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              name="productName"
              ref={productName}
              placeholder="product name"
              className="form-control"
              required="required"
            />
          </div>

          <div className="form-group mb-2">
            <label className="form-label">Supplier Id</label>

            <input
              className="form-control"
              type="number"
              ref={supplierID}
              name="supplierID"
              placeholder="Supplier ID"
              required="required"
            />
          </div>

          <div className="form-group mb-2">
            <label className="form-label">Category Id</label>

            <input
              className="form-control"
              type="number"
              ref={categoryID}
              name="categoryID"
              placeholder="Category Id"
              required="required"
            />
          </div>

          <div className="form-group mb-2">
            <label className="form-label">Quantity Per Unit</label>

            <input
              className="form-control"
              type="text"
              ref={quantityPerUnit}
              name="quantityPerUnit"
              placeholder="Quantity Per Unit"
              required="required"
            />
          </div>

          <div className="form-group mt-3 mb-2 text-end ">
            <button className="btn btn-danger " type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { data } = await client.mutate({
    mutation: CREATE_PRODUCTS,
    variables: {
      name: "munna",
      supplierID: 1,
      categoryID: 1,
      quantityPerUnit: "1200",
    },
  });

  return { props: { product: data } };
};

export default CreateProduct;
