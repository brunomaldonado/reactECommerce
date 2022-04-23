import React from 'react';
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
import useGetProduct from "../hooks/useGetProducts";

// const API = "https://api.escuelajs.co/api/v1/products";
// const API = 'http://localhost:53620/home/GetProduct'

const API = 'https://fakestoreapi.com/products'

const ProductList = () => {
const products = useGetProduct(API);

  return (
    <section className="main-container content">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
