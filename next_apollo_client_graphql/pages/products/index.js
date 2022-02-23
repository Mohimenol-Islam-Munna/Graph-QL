import React from "react";
import Link from "next/link";

const Product = () => {
  return (
    <>
      <div
        style={{
          margin: "20px auto",
          textAlign: "center",
          border: "1px solid salmon",
          borderRadius: "10px",
          padding: "20px",
        }}
        className="container"
      >
        <h4>Everythings About Product</h4>
        <div className="my-5">
          <span style={{ margin: "5px" }}>
            <Link href="/all-product">
              <a className="btn btn-warning">All Products</a>
            </Link>
          </span>
          <span style={{ margin: "5px" }}>
            <Link href="/products/create-product" className="btn btn-warning">
              <a className="btn btn-danger"> Create Product </a>
            </Link>
          </span>
        </div>
      </div>
      <div className="bg-dark text-white mt-3 mb-0 p-3 text-center">
        <h6 className="m-0 p-0">Product Footer</h6>
      </div>
    </>
  );
};

export default Product;
