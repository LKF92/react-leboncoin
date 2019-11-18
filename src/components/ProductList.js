import React from "react";
import { Link } from "react-router-dom";

export default function ProductList({ data }) {
  return (
    <div className="products-lists">
      <ul>
        {data.map(offer => {
          return (
            <li key={offer._id}>
              <Link className="item-card" to={"/product/" + offer._id}>
                <img
                  className="item-img"
                  src={offer.pictures[0]}
                  alt="item on offer"
                />
                <div className="item-description">
                  <div>
                    <h3 className="item-title">{offer.title}</h3>
                    <p className="item-price"> {offer.price}€</p>
                  </div>
                  <p className="item-date"> {offer.created}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
