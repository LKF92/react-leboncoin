import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Modal from "../src/components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      {showModal && <Modal />}
      <Navbar setShowModal={setShowModal} />
      <Switch>
        <Route path="/product/:id">
          <Product />
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
