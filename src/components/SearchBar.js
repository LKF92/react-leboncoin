import React from "react";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <svg
        width="22"
        height="22"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9417 18.7584H21.2584L29.575 27.0917L27.0917 29.575L18.7584 21.2584V19.9417L18.3084 19.475C16.4084 21.1084 13.9417 22.0917 11.2584 22.0917C5.27505 22.0917 0.425049 17.2417 0.425049 11.2584C0.425049 5.27502 5.27505 0.425018 11.2584 0.425018C17.2417 0.425018 22.0917 5.27502 22.0917 11.2584C22.0917 13.9417 21.1084 16.4084 19.475 18.3083L19.9417 18.7584ZM3.75838 11.2584C3.75838 15.4084 7.10838 18.7584 11.2584 18.7584C15.4084 18.7584 18.7584 15.4084 18.7584 11.2584C18.7584 7.10835 15.4084 3.75835 11.2584 3.75835C7.10838 3.75835 3.75838 7.10835 3.75838 11.2584Z"
          fill={props.color}
        />
      </svg>
      <input type="search" placeholder={props.placeholder} />
    </div>
  );
}

export default SearchBar;
