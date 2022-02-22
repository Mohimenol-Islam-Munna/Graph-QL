import React, { useRef } from "react";
import useCreateProductMutaion from "../../apolloClient/Product/useCreateProductMutaion";

const CreateProduct = () => {
  const { createProductHandler, loading, data } =
    useCreateProductMutaion();

  // catch form field data by useRef
  const productName = useRef();
  const supplierID = useRef();
  const categoryID = useRef();
  const quantityPerUnit = useRef();

  console.log("Create Product Data After Product Creation :::", data);

  if(!loading && data){
    alert("data created successfully");
  } 

  const submitHandler = (e) => {
    e.preventDefault();

    createProductHandler({
      variables: {
        name: productName.current.value,
        supplierID: parseInt(supplierID.current.value),
        categoryID: parseInt(categoryID.current.value),
        quantityPerUnit: quantityPerUnit.current.value,
      },
    });
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
      <h4>Create Product Page</h4>
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

          <div className="form-group mb-2">
            <button className="btn btn-danger" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
