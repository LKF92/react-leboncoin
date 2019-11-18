import React from "react";

export default function PageButtons(props) {
  const { numberOfPage, setPage, page } = props;
  let pages = [...Array(numberOfPage)]; //create an array of n times 'undefined'

  return (
    <div className="page-buttons">
      {pages.map((element, index) => {
        if (index + 1 !== page) {
          return (
            <div
              key={index}
              className="page-btn"
              onClick={() => {
                setPage(index + 1);
              }}
            >
              {index + 1}
            </div>
          );
        } else {
          return (
            <div key={index} className="current-page-btn">
              {index + 1}
            </div>
          );
        }
      })}
    </div>
  );
}
