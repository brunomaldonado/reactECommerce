import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(API);

      const _randomslice = (ar, size) => {
        let new_ar = [...ar];
        new_ar.splice(Math.floor(Math.random() * ar.length), 1);
        return ar.length <= size + 1 ? new_ar : _randomslice(new_ar, size);
      };

      const randomData = _randomslice(data, 50);

      // console.log(data);
      // setProducts(randomData);
      setProducts(data);
    }
    fetchData();
  }, []);

  return products;
};

export default useGetProducts;
