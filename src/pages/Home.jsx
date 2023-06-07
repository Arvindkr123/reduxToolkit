import React from "react";
import Products from "../components/Products.jsx";

const Home = () => {
  return (
    <div>
      <h1 className="heading">Welcome to the redux toolkit store</h1>
      <h3>Products</h3>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
