import React from "react";
import Logo from "./Logo";
import NewOfferBtn from "./NewOfferBtn";
import SearchBar from "./SearchBar";
import LoginIcon from "./LoginIcon";
import { Link, useHistory } from "react-router-dom";

export default function Navbar({ setShowModal, user, logOut }) {
  const history = useHistory();
  const verifyUser = () => {
    if (user) {
      history.push("/offer/create");
    } else {
      setShowModal(true);
    }
  };
  return (
    <nav>
      <div className="navbar__left-bloc">
        <Link to="/">
          <Logo />
        </Link>
        <div onClick={() => verifyUser()}>
          <NewOfferBtn />
        </div>

        <SearchBar color="black" placeholder="Rechercher" />
      </div>

      {/* Depending on wether or not the user is connected, we call a different component */}
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
