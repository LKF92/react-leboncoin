import React from "react";
import Logo from "./Logo";
import NewOfferBtn from "./NewOfferBtn";
import SearchBar from "./SearchBar";
import LoginIcon from "./LoginIcon";

export default function Navbar({ setShowModal }) {
  return (
    <nav>
      <div className="navbar__left-bloc">
        <Logo />
        <NewOfferBtn />
        <SearchBar color="black" placeholder="Rechercher" />
      </div>
      <div onClick={() => setShowModal(true)}>
        <LoginIcon type="Se Connecter" />
      </div>
    </nav>
  );
}
