import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Product = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const params = useParams();

  const fetchData = React.useCallback(
    async url => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" + params.id
      );
      setData(response.data);
      setIsLoading(false);
    },
    [params.id]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {console.log(data)}
      <div className="container">
        {isLoading ? <p>fetching data....</p> : <ProductCard {...data} />}
        {/* <div>contact Seller</div> */}
      </div>
    </>
  );
};
export default Product;
