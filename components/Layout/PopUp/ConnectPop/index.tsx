import React, { useState, useEffect, useRef, FunctionComponent } from "react";
import styles from "./index.module.css";
import SignUpBox from "./SignUpBox";

import { AppState } from "@/redux/store";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LoginUser } from "@/redux/actions/auth";
import { AppActions } from "@/redux/actions/AppActions";
import { useCookies } from "react-cookie";

interface LinkStateProps {
  userLoginLoading: boolean;
}

interface LinkDispatchProps {
  LoginUser: (email: string, password: string) => any;
}

interface ComponentsProps {
  setShowConnectPop: any;
  setIsLoggedIn: any;
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;

const ConnectPop: FunctionComponent<Props> = ({
  setShowConnectPop,
  setIsLoggedIn,
  LoginUser,
  userLoginLoading
}) => {
  const [showSignUpBox, setShowSignUpBox] = useState(false);
  const popRef: any = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  const clickSignUp: any = () => {
    setShowSignUpBox(true);
  };

  useEffect(() => {
    const handleClickOutside: any = (event: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(event.target as Node)) {
        setShowConnectPop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowConnectPop]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    let token;

    if (!email) {
      setEmailError("Please enter Email.");
      setPasswordError("Please enter Password.");
      return;
    }
    if (!password) {
      setPasswordError("Please enter Password.");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Password must be 8 characters");
      return;
    }
    else {
      token = await LoginUser(email, password);
    }

    // const token = await LoginUser(email, password);

    if (token) {
      // console.log(token,"user access token")
      setCookie("access_token", token, { path: "/" });
    }

    setShowConnectPop(false);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    setEmailError("");
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    setPasswordError("");
  }

  return (
    <div className={styles.pop}>
      {showSignUpBox ? (
        <SignUpBox
          setShowSignUpBox={setShowSignUpBox}
          setShowConnectPop={setShowConnectPop}
        />
      ) : (
        <div className={styles.box} ref={popRef}>
          <h2 className={styles.h2}>Login or Signup</h2>
          <form action="post" onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.sect}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.inp_box}
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className={styles.error}>{emailError}</p>}
            </div>
            <div className={styles.sect}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className={styles.inp_box}
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <p className={styles.error}>{passwordError}</p>}
            </div>
            <div className={styles.btn_div}>
              {/* <button type="submit" className={styles.submit_btn}>
                Login
              </button> */}
              {userLoginLoading ?
                (
                  <button className={styles.submit_btn}>
                    <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
                  </button>
                ) :
                (
                  <button type="submit" className={styles.submit_btn}>
                    Login
                  </button>
                )
              }
            </div>
          </form>
          <p className={styles.p}>
            Don't have an account ?
            <span className={styles.sup_btn} onClick={clickSignUp}>
              SignUp
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState): LinkStateProps => ({
  userLoginLoading: state.auth.loading
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  LoginUser: bindActionCreators(LoginUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectPop);
