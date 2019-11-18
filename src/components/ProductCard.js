import React from "react";

export default function ProductCard(props) {
  const { pictures, title, price, created } = props;
  return (
    <div className="product-description">
      <div className="product-card">
        <img className="item-img" src={pictures[0]} alt="item on offer" />
        <div className="item-description">
          <div>
            <h3 className="item-title">{title}</h3>
            <p className="item-price"> {price}€</p>
          </div>
          <p className="item-date"> {created}</p>
        </div>
      </div>
    </div>
  );
}
