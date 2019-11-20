import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Dropzone from "../components/Dropzone";
import Cookie from "js-cookie";

export default function NewOffer(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState(false);
  const priceCheckRegex = /^[0-9]+$/;
  const [file, setFile] = useState();
  const token = Cookie.get("user-token");
  const history = useHistory();

  const handleForm = async () => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("price", price);
    data.append("files", file);

    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        data,
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <main id="new-offer-page">
      <div className="form-card">
        <h3>Déposer une annonce</h3>
        <form
          className="new-offer-form"
          onSubmit={event => {
            event.preventDefault();
            handleForm();
          }}
        >
          <div className="form-sub-section">
            <label>
              <p className="form-label-text">Titre de l'annonce *</p>
              <input
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
              {/* We toggle a warning in case the user forget to fill this input */}
              {title === "" && (
                <p className="warnings">
                  Vous devez donner un titre à votre annonce.
                </p>
              )}
            </label>
          </div>
          <div className="form-sub-section">
            <label>
              <p className="form-label-text">Description de l'annonce *</p>
              <textarea
                type="textarea"
                rows={4}
                value={description}
                onChange={event => setDescription(event.target.value)}
              ></textarea>
              {/* We toggle a warning in case the user forget to fill this input */}
              {description === "" && (
                <p className="warnings">
                  Vous devez fournir une description de ce que vous vendez.
                </p>
              )}
            </label>
          </div>
          <div className="form-sub-section">
            <label>
              <p className="form-label-text">Prix *</p>
              <input
                className="price-input"
                type="text"
                value={price}
                onBlur={() => {
                  if (!price) {
                    setPriceError(true);
                  }
                }}
                onFocus={() => setPriceError(false)}
                onChange={event => {
                  if (priceCheckRegex.test(event.target.value)) {
                    setPrice(event.target.value);
                    setPriceError(false);
                  } else {
                    setPrice(event.target.value);
                    setPriceError(true);
                  }
                }}
              />
              <span> €</span>
              {/* We toggle a warning in case the user forgot to inform price or if the price is not a number*/}
              {priceError && <p className="warnings">Le prix est incorrect.</p>}
            </label>
          </div>
          <div className="form-sub-section">
            <Dropzone setFile={setFile} />
            {/* <label>
              <p className="form-label-text">Photo *</p>
              <input
                className="file-input"
                type="file"
                onChange={event => setFile(event.target.files[0])}
              />
              {file === "" && (
                <p className="warnings">
                  Vous devez choisir une image de ce que vous vendez.
                </p>
              )}
            </label> */}
          </div>
          <div className="form-sub-section">
            {price && priceError === false && title && description && file ? (
              <button className="validate-btn">Valider</button>
            ) : (
              <button className="disabled">Valider</button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
