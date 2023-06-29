import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./index.module.css";
import { useCookies } from "react-cookie";

import { AppActions } from "@/redux/actions/AppActions";
// import { AppState } from "@/redux/store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { CreateNft } from "@/redux/actions/nfts";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  UploadTaskSnapshot,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import CreateSeller from "../PopUp/CreateSeller";

interface AppState {
  seller: {
    seller: string;
  };
  nft: {
    loading: boolean;
  }
}

interface LinkStateProps {
  nftCreateLoading: boolean;
  seller: string;
}

interface LinkDispatchProps {
  CreateNft: (formData: {}, token: string) => void;
}

interface ComponentsProps { }

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;

const ItmForm: FunctionComponent<Props> = ({ CreateNft, nftCreateLoading, seller }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyA8XY4-unn7icu4TBc_q1eHHTW7rG1Yuh0",
    authDomain: "nft-market-6c792.firebaseapp.com",
    projectId: "nft-market-6c792",
    storageBucket: "nft-market-6c792.appspot.com",
    messagingSenderId: "3749974634",
    appId: "1:3749974634:web:d1e955416eba89e62c7013",
    measurementId: "G-TDELBPR48X",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig, "myUniqueAppName");
  const storage = getStorage(app);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setImage("");
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  const [cookies, setCookie] = useCookies(["access_token"]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = cookies.access_token;

    // Create an object with the form data
    const formData = {
      image,
      name,
      description,
      price,
      quantity,
    };

    if (!image && !name && !description && !price && !quantity) {
      setError("Please fill all input fields with valid information.");
    } else if (!image) {
      setError("Image is required.");
    } else if (!name) {
      setError("Name is required.");
    } else if (!description) {
      setError("Description is required.");
    } else if (!price) {
      setError("Price is required.");
    } else if (!quantity) {
      setError("Quantity is required.");
    } else {
      const fileInput = document.getElementById(
        "nftImg"
      ) as HTMLInputElement | null;

      const file = fileInput?.files?.[0];

      if (file) {
        const uploadTask = uploadBytesResumable(
          ref(storage, `nftS/${file.name}`),
          file
        );

        uploadTask.on(
          "state_changed",
          (snapshot: UploadTaskSnapshot) => {
            // Handle progress, if needed
          },
          (error) => {
            setError("An error occurred while uploading the file.");
            console.log(error);
          },
          () => {
            // File uploaded successfully, retrieve the download URL
            getDownloadURL(ref(storage, `nftS/${file.name}`))
              .then((url) => {
                formData.image = url;
                CreateNft(formData, token);
                resetForm();
                setError("");
              })
              .catch((error) => {
                setError("An error occurred while retrieving the file URL.");
                console.log(error);
              });
          }
        );
      } else {
        setError("Please select a profile image.");
      }
    }
  };

  return (
    <>
      {seller === "" &&
        <CreateSeller />
      }
      <div className={styles.back}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.h3}>Create new Item</h3>
          <div className={styles.sect1}>
            <label className={styles.p}>Upload Link</label>
            <div className={styles.filebox}>
              <input
                type="file"
                name="nftImg"
                className={styles.input}
                id="nftImg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.sect2}>
            <label className={styles.p}>Name</label>
            <input
              type="text"
              name="name"
              className={styles.namebox}
              placeholder="Item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.sect3}>
            <label className={styles.p}>Description</label>
            <textarea
              name="desc"
              id="desc"
              className={styles.descbox}
              placeholder="Description of your item"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.sect4}>
            <div>
              <label className={styles.p}>Price</label>
              <div className={styles.sect3_1}>
                <input
                  type="number"
                  name="price"
                  className={styles.pricecbox}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <select id="cars" name="cars" className={styles.selector}>
                  <option value="volvo">USD</option>
                </select>
              </div>
            </div>
            <div className={styles.flex_row}>
              <label className={styles.p}>Quantity</label>
              <input
                type="number"
                name="quantity"
                className={styles.pricecbox}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.btn}>
            {nftCreateLoading ?
              (
                <button className={styles.sbm_btn}>
                  <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
                </button>
              ) :
              (
                <button type="submit" className={styles.sbm_btn}>
                  Create Item
                </button>
              )
            }
          </div>
        </form>
      </div>
    </>
  );
};



const mapStateToProps = (state: AppState): LinkStateProps => ({
  nftCreateLoading: state.nft.loading,
  seller: state.seller.seller
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  CreateNft: bindActionCreators(CreateNft, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItmForm);
