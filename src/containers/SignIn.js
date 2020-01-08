import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CheckBoxOutlineBlankOutlined,
  CheckBox,
  AccessTime,
  NotificationsActiveOutlined,
  Visibility
} from "@material-ui/icons";

const axios = require("axios");

export default function SignIn({ user, logIn }) {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const history = useHistory();

  const confirmSignIn = () => {
    if (isAccepted === false) {
      return alert("vous devez accepter les conditions d'utilisation");
    }
    if (password === passwordConfirmation) {
      try {
        axios
          .post("https://leboncoin-backend.herokuapp.com/user/sign-in", {
            email: email,
            username: pseudo,
            password: password
          })
          .then(
            response => {
              console.log(response.data);
              logIn(response.data);
              history.push("/");
            },
            error => {
              console.log(error.message);
              console.log(error.help);
            }
          );
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("le password n'est pas le meme");
    }
  };

  return (
    <section className="sign-in">
      <div className="why-sign-in">
        <h3>Pourquoi créer un compte ?</h3>
        <div className="arguments-list">
          <div className="argument-box">
            <div className="argument-icon">
              <AccessTime />
            </div>
            <div className="argument-section">
              <h4>Gagnez du temps</h4>
              <p>
                Publiez vos annonces rapidement avec vos informations pré-remplies chaque fois que
                vous souhaitez déposer une nouvelle anonce.
              </p>
            </div>
          </div>
          <div className="argument-box">
            <div className="argument-icon">
              <NotificationsActiveOutlined />
            </div>
            <div className="argument-section">
              <h4>Soyez les premiers informés</h4>
              <p>
                Créer des alertes Immo ou Emploi et ne manque jamais l'annonce qui vous intéresse.
              </p>
            </div>
          </div>
          <div className="argument-box">
            <div className="argument-icon">
              <Visibility />
            </div>
            <div className="argument-section">
              <h4>Visibilité</h4>
              <p>
                Suivez les statistiques de vos annonces (nombre de fois où votre annone a été vue,
                nombre de contacts reçus).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-in-info">
        <h3>Créer un compte</h3>
        <form
          className="sign-in-form"
          onSubmit={event => {
            event.preventDefault();
            confirmSignIn();
          }}
        >
          <label>
            <p>Pseudo *</p>
            <input value={pseudo} type="text" onChange={e => setPseudo(e.target.value)} />
            {pseudo === "" && <p className="warnings">Veuillez saisir un pseudo.</p>}
          </label>
          <label>
            <p>Adresse email *</p>
            <input value={email} type="text" onChange={e => setEmail(e.target.value)} />
            {email === "" && <p className="warnings">Veuillez saisir une adresse email.</p>}
          </label>
          <div className="passwords">
            <label>
              <p>Mot de passe *</p>
              <input
                value={password}
                type="password"
                id="password"
                onChange={e => setPassword(e.target.value)}
              />
              {regexPassword.test(password) === false && (
                <p className="warnings">
                  Votre mot de passe doit comprendre au moins 8 caractères, une majuscule et un
                  chiffre.
                </p>
              )}
            </label>
            <label>
              <p>Confirmer le mot de passe *</p>
              <input
                value={passwordConfirmation}
                type="password"
                onBlur={() => setErrorPassword(true)}
                onFocus={() => setErrorPassword(false)}
                onChange={e => setPasswordConfirmation(e.target.value)}
              />
              {errorPassword && password !== passwordConfirmation && (
                <p className="warnings">
                  Les mots de passe saisis sont différents. Veuillez réessayer.
                </p>
              )}
            </label>
          </div>
          <div className="CGV">
            <label htmlFor="CGV" onClick={() => setIsAccepted(!isAccepted)}>
              {isAccepted ? <CheckBox /> : <CheckBoxOutlineBlankOutlined />}
              <p>
                J'ai lu et accepte les conditions générales d'utilisation et la politique de
                confidentialité
              </p>
            </label>
          </div>
          {email && pseudo && password && password === passwordConfirmation && isAccepted ? (
            <button className="sign-in-btn">Créer un compte personnel</button>
          ) : (
            <button className="sign-in-btn disabled">Créer un compte personnel</button>
          )}
        </form>
      </div>
    </section>
  );
}
