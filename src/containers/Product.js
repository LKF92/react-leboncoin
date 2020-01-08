import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Product = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const params = useParams();
  console.log(params);

  const fetchData = async url => {
    const response = await axios.get(url);
    console.log(response);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData("https://leboncoin-backend.herokuapp.com/offer/" + params.id);
  }, [params.id]);

  return (
    <>
      <div className="container">
        {isLoading ? <p>fetching data....</p> : <ProductCard {...data} />}
      </div>
    </>
  );
};
export default Product;
