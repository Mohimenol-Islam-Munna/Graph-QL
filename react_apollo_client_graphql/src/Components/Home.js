import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Component</h2>
      <div>
        <Link to="characters">Characters</Link> <br/>
        <Link to="customers">Customers</Link>
      </div>
    </div>
  );
}

export default Home;
