import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Characters from "./Components/Characters";
import CharactersHome from "./Components/CharactersHome";
import Character from "./Components/Character";
import Customers from "./Components/Customers";
import CustomersHome from "./Components/CustomersHome";
import Product from "./Components/Product/Product";
import AllProduct from "./Components/Product/AllProduct";
import CreateProduct from "./Components/Product/CreateProduct";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Apollo Client GraphQl</h2>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />}>
          <Route index element={<CharactersHome />} />
          <Route path=":id" element={<Character />} />
        </Route>
        <Route path="/customers" element={<Customers />}>
          <Route index element={<CustomersHome />} />
        </Route>
        <Route path="/product" element={<Product />}>
          <Route path="all-product" element={<AllProduct />} />
          <Route path="create-product" element={<CreateProduct />} />
        </Route>
        <Route path="*" element={<h2>404 Path Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
