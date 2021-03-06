import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const axios = require("axios");

export default function Modal({ logIn, setShowModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const confirmLogin = () => {
    axios
      .post("https://leboncoin-backend.herokuapp.com/user/login", {
        email: email,
        password: password
      })
      .then(
        response => {
          console.log(response.data);
          logIn(response.data);
          setShowModal(false);
          history.push("/");
        },
        error => {
          console.log(error);
        }
      );
  };

  return (
    <div className="modal-page">
      <div className="toggle-modal" onClick={() => setShowModal(false)}>
        X
      </div>
      <div className="modal-card">
        <h3>Connexion</h3>
        <form
          className="login-form"
          onSubmit={event => {
            event.preventDefault();
            confirmLogin();
          }}
        >
          <label htmlFor="email">
            <p> Adresse email</p>
            <input
              value={email}
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <p>Mot de passe</p>
            <input
              value={password}
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <button className="login-btn" value="Se connecter">
            Se connecter
          </button>
        </form>
        <div className="no-account">
          <p>Vous n'avez pas de compte ? </p>
          <Link
            to="/sign-in"
            onClick={() => setShowModal(false)}
            className="create-account"
            type="button"
            value="Créer un compte"
          >
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
}
