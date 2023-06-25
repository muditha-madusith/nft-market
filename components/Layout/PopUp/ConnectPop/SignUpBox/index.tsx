import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  UploadTaskSnapshot,
} from "firebase/storage";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { AppActions } from "../../../../../redux/actions/AppActions";
import { bindActionCreators } from "redux";
import { RegisterUser } from "../../../../../redux/actions/auth/index";
import { initializeApp } from "firebase/app";


interface LinkDispatchProps {
  RegisterUser: (
    name: string,
    email: string,
    password: string,
    password2: string,
    profileUrl: string
  ) => void;
}

interface ComponentsProps {
  setShowSignUpBox: any;
  setShowConnectPop: any;
}

type Props = LinkDispatchProps & ComponentsProps;

const SignUpBox: FunctionComponent<Props> = ({
  setShowSignUpBox,
  setShowConnectPop,
  RegisterUser,
}) => {
  const popRef: any = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(event.target as Node)) {
        setShowSignUpBox(false);
        setShowConnectPop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSignUpBox]);

  const clickLoginBtn = () => {
    setShowSignUpBox(false);
  };

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [error, setError] = useState("");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setError("");
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    setError("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // prevent page from refreshing
    if (!email || !password || !username || !password2 || !profileUrl) {
      setError("Please fill all fields with valid information.");
      return;
    } else if (password.length < 8 || password2.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    } else if (password !== password2) {
      setError("Password and Confirm Password must match.");
      return;
    } else {
      const fileInput = document.getElementById(
        "profileUrl"
      ) as HTMLInputElement | null;

      const file = fileInput?.files?.[0];

      if (file) {
        const uploadTask = uploadBytesResumable(
          ref(storage, `profileImages/${file.name}`),
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
            getDownloadURL(ref(storage, `profileImages/${file.name}`))
              .then((url) => {
                RegisterUser(username, email, password, password2, url);
                setShowSignUpBox(false);
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
  }

  return (
    <div className={styles.box} ref={popRef}>
      <h2 className={styles.h2}>Create an Account</h2>
      <form action="post" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.sect}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name2"
            id="name"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className={styles.inp_box}
          />
        </div>
        <div className={styles.sect}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.inp_box}
          />
        </div>
        <div className={styles.sect}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.inp_box}
          />
        </div>
        <div className={styles.sect}>
          <label className={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            className={styles.inp_box}
          />
        </div>
        <div className={styles.sect}>
          <label className={styles.label}>Upload your profile Image</label>
          <div className={styles.profile_inp_box}>
            <input
              type="file"
              name="profileUrl"
              id="profileUrl"
              value={profileUrl}
              onChange={(e) => {
                setProfileUrl(e.target.value);
              }}
              className={styles.input}
            />
          </div>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.btn_div}>
          <button type="submit" className={styles.submit_btn}>
            Create Account
          </button>
        </div>
      </form>
      <p className={styles.p}>
        Back to
        <span className={styles.sup_btn} onClick={clickLoginBtn}>
          Login
        </span>
      </p>
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  RegisterUser: bindActionCreators(RegisterUser, dispatch),
});

export default connect(null, mapDispatchToProps)(SignUpBox);
