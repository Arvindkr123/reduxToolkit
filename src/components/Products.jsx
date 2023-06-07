import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { STATUSES, fetchProducts } from "../Store/productSlice";

const Products = () => {
  const dispath = useDispatch();
  const { data: products, status } = useSelector(state => state.product);


  // const [products, setProducts] = useState([]);
  useEffect(() => {
    dispath(fetchProducts())
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispath(add(product));
  }

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>
  }

  if (status === STATUSES.ERROR) {
    return <h2>Somethig went wrong!</h2>
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="image" />
          <h4>{product.title}</h4>
          <h5>$ {product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
