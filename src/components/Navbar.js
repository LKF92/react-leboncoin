import React from "react";
import Logo from "./Logo";
import NewOfferBtn from "./NewOfferBtn";
import SearchBar from "./SearchBar";
import LoginIcon from "./LoginIcon";

export default function Navbar({ setShowModal, user, logOut }) {
  return (
    <nav>
      <div className="navbar__left-bloc">
        <Logo />
        <NewOfferBtn />
        <SearchBar color="black" placeholder="Rechercher" />
      </div>
      {user ? (
        <div onClick={() => logOut()}>
          <LoginIcon type="Se déconnecter" />
        </div>
      ) : (
        <div onClick={() => setShowModal(true)}>
          <LoginIcon type="Se Connecter" />
        </div>
      )}
    </nav>
  );
}
