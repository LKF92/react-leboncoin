import React from "react";

function LoginIcon(props) {
  return (
    <div className="login-icon">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0ZM12.625 5C12.625 3.55 11.45 2.375 9.99999 2.375C8.54999 2.375 7.37499 3.55 7.37499 5C7.37499 6.45 8.54999 7.625 9.99999 7.625C11.45 7.625 12.625 6.45 12.625 5ZM17.625 16.25C17.625 15.45 13.7125 13.625 10 13.625C6.2875 13.625 2.375 15.45 2.375 16.25V17.625H17.625V16.25ZM0 16.25C0 12.925 6.6625 11.25 10 11.25C13.3375 11.25 20 12.925 20 16.25V20H0V16.25Z"
          fill="black"
        />
      </svg>
      <p>{props.type}</p>
    </div>
  );
}

export default LoginIcon;