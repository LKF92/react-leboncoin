import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

export default function SignIn({ user, logIn }) {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();

  const confirmSignIn = () => {
    if (password === passwordConfirmation) {
      axios
        .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
          email: email,
          pseudo: pseudo,
          password: password
        })
        .then(
          response => {
            logIn(response.data);
            history.push("/");
            alert(response.data);
          },
          error => {
            console.log(error);
          }
        );
    } else {
      console.log("le password n'est pas le meme");
    }
  };

  return (
    <section className="sign-in">
      <div className="why-sign-in">
        <p>inscrivez vous c'est cool</p>
      </div>
      <div className="sign-in-info">
        <h3>Créer un compte</h3>
        <form className="sign-in-form" onSubmit={() => confirmSignIn()}>
          <label htmlFor="pseudo">
            <p>Pseudo *</p>
            <input
              type="text"
              name="pseudo"
              onChange={e => setPseudo(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <p>Adresse email *</p>
            <input
              type="text"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <div className="passwords">
            <label htmlFor="password">
              <p>Mot de passe *</p>
              <input
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </label>
            <label htmlFor="confirm-password">
              <p>Confirmer le mot de passe *</p>
              <input
                type="password"
                name="confirm-password"
                onChange={e => setPasswordConfirmation(e.target.value)}
              />
            </label>
          </div>
          <div className="CGV">
            <input type="checkbox" className="CGV-checkbox" />
            <p>
              J'ai lu et accepte les conditions générales d'utilisation et la
              politique de confidentialité
            </p>
          </div>
          <button className="sign-in-btn">Créer un compte personnel</button>
        </form>
      </div>
    </section>
  );
}
