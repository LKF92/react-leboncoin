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
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [sort, setSort] = useState("");

  const fetchData = async url => {
    const response = await axios.get(url);
    setData(response.data.offers);
    setNumberOfPage(Math.ceil(response.data.count / 3)); //get the maximum number of page to display
    setIsLoading(false);
  };

  useEffect(() => {
    let skip = page * 3 - 3;
    let limit = 3;
    let url = `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${skip}&limit=${limit}`;
    if (search) {
      url += `&title=${search}`;
    }
    if (priceMin) {
      url += `&priceMin=${priceMin}`;
    }
    if (priceMax) {
      url += `&priceMax=${priceMax}`;
    }
    if (sort) {
      url += `&sort=${sort}`;
    }
    fetchData(url); // We load data when first loading the page and when pages number or query change
  }, [page, sort, priceMax, priceMin, search]);

  return (
    <div>
      <div className="home-search-box">
        <div>
          <SearchBar color="grey" placeholder="Que recherchez-vous ?" />
        </div>
        <Button text="Rechercher" />
      </div>
      {isLoading ? (
        <p>fetching data...</p>
      ) : (
        <ProductList
          data={data}
          search={search}
          priceMax={priceMax}
          priceMin={priceMin}
          sort={sort}
        />
      )}
      <PageButtons numberOfPage={numberOfPage} page={page} setPage={setPage} />
    </div>
  );
}
