import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div style={{margin: "20px 0px"}}>
        <h4>Everythings About Product</h4>
        <div className="my-5">
          <span style={{ margin: "5px" }}>
            <Link to="all-product" className="btn btn-primary">All Products</Link>
          </span>
          <span style={{ margin: "5px" }}>
            <Link to="create-product" className="btn btn-warning">Create Product</Link>
          </span>
        </div>
      </div>
      <Outlet />
      <div className="bg-dark text-white mt-3 mb-0 p-3">
        <h6 className="m-0 p-0">Product Footer</h6>
      </div>
    </>
  );
};

export default Product;
