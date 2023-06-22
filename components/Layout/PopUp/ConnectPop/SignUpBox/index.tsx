import React, { FunctionComponent } from "react";
import styles from "./index.module.css";
import { useState, useEffect, useRef } from "react";

//redux imports
import { AppState } from "../../../../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { AppActions } from "../../../../../redux/actions/AppActions";
import { bindActionCreators } from "redux";
import { RegisterUser } from "../../../../../redux/actions/auth/index";

interface LinkStateProps {}

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

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;

const SignUpBox: FunctionComponent<Props> = ({
  setShowSignUpBox,
  setShowConnectPop,
  RegisterUser,
}) => {
  const popRef: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: any = (event: MouseEvent) => {
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

  const clickLoginBtn: any = () => {
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

  function handleSubmit(e: any) {
    e.preventDefault(); // prevent page from refreshing
    if (!email || !password || !username || !password2 || !profileUrl) {
        setError("Please fill all fields with valid informations.");
        return;
    } else {
        RegisterUser(username, email, password, password2, profileUrl);
        setShowSignUpBox(false);
    }
    // RegisterUser(username, email, password, password2, profileUrl);
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
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
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
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
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
          <label className={styles.label}>Upload your profile Image-Url</label>
          <p className={styles.instructions}>
            Upload your profile to Google drive and create it public. After that
            copy the image id and upload it like this{" "}
            <u>"https://drive.google.com/uc?id=YOUR-IMAGE-ID"</u> or any other
            public image link (if don't have link use this{" "}
            <u>
              "https://drive.google.com/uc?id=1fwuIWzc76IShNnJJVw0mnqA0Y1jhKRSK")
            </u>
          </p>
          <input
            type="text"
            name="profileUrl"
            id="profileUrl"
            value={profileUrl}
            onChange={(e) => {
              setProfileUrl(e.target.value);
            }}
            className={styles.inp_box}
          />
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

const mapStateToProps = (state: AppState): LinkStateProps => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  RegisterUser: bindActionCreators(RegisterUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpBox);
