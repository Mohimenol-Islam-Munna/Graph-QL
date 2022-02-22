import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Home Component</h3>
      <div>
        <Link to="characters" className="btn btn-success mx-2">
          Characters
        </Link>
        <Link to="customers" className="btn btn-danger mx-2">
          Customers
        </Link>
        <Link to="product" className="btn btn-info mx-2">
          Products
        </Link>
      </div>
    </div>
  );
}

export default Home;
