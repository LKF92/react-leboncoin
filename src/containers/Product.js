import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Product = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const params = useParams();

  const fetchData = async url => {
    const response = await axios.get(url);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData("https://leboncoin-api.herokuapp.com/api/offer/" + params.id);
  }, []);

  return (
    <>
      <Navbar />
      {console.log(data)}
      <div className="container">
        {isLoading ? <p>fetching data....</p> : <ProductCard {...data} />}
        {/* <div>contact Seller</div> */}
      </div>
      <Footer />
    </>
  );
};
export default Product;
