import React from "react";

export default function Modal() {
  return (
    <div className="modal-page">
      <div className="modal-card">
        <h3>Connexion</h3>
        <form className="login-form">
          <label htmlFor="email">
            <p> Adresse email</p>
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            <p>Mot de passe</p>
            <input type="password" name="password" />
          </label>
          <button className="login-btn" value="Se connecter">
            Se connecter
          </button>
        </form>
        <div className="no-account">
          <p>Vous n'avez pas de compte ? </p>
          <button
            className="create-account"
            type="button"
            value="Créer un compte"
          >
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
}
