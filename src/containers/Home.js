import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import ProductList from "../components/ProductList";
import PageButtons from "../components/PageButtons";

export default function Home() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState(null);

  const fetchData = async url => {
    const response = await axios.get(url);
    setData(response.data.offers);
    setNumberOfPage(Math.ceil(response.data.count / 3)); //get the maximum number of page to display
    setIsLoading(false);
  };

  useEffect(() => {
    let skip = page * 3 - 3;
    let limit = 3;
    fetchData(
      `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${skip}&limit=${limit}`
    ); // We load data when first loading the page and when pages change
  }, [page]);

  return (
    <div>
      <div className="home-search-box">
        <SearchBar color="grey" placeholder="Que recherchez-vous ?" />
        <Button text="Rechercher" />
      </div>
      {isLoading ? <p>fetching data...</p> : <ProductList data={data} />}
      <PageButtons numberOfPage={numberOfPage} page={page} setPage={setPage} />
    </div>
  );
}
