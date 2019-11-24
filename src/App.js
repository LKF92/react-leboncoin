import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Modal from "../src/components/Modal";
import SignIn from "./containers/SignIn";
import NewOffer from "./containers/NewOffer";

function App() {
  const [showModal, setShowModal] = useState(false);
  const userCookie = Cookies.get("user-token");
  const [user, setUser] = useState(userCookie);
  return (
    <Router>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          user={user}
          logIn={obj => {
            Cookies.set("user-token", obj.token);
            setUser({
              token: obj.token,
              email: obj.email,
              username: obj.account.username
            });
          }}
        />
      )}
      <Navbar
        setShowModal={setShowModal}
        logOut={() => {
          Cookies.remove("user-token");
          setUser(null);
        }}
        user={user}
      />
      <Switch>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/sign-in">
          <SignIn
            user={user}
            logIn={obj => {
              Cookies.set("user-token", obj.token);
              setUser({
                token: obj.token,
                email: obj.email,
                username: obj.account.username
              });
            }}
          />
        </Route>
        <Route path="/offer/create">
          <NewOffer />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
