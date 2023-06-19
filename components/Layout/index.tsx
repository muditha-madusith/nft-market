import React, { useEffect, FunctionComponent } from 'react'
import styles from './index.module.css';
import NavIndex from './NavBar';
import Footer from './Footer';
import { useCookies } from 'react-cookie';
import jwtDecode from "jwt-decode";

//redux imports
import { AppState } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { AppActions } from "../../redux/actions/AppActions";
import { bindActionCreators } from "redux";
import { GetUserDetails } from "../../redux/actions/auth/index"
import { IAuth } from "../../redux/types/AuthActionTypes"

interface LinkStateProps {
  auth: IAuth
}

interface LinkDispatchProps {
  GetUserDetails: (id: string) => void
}

interface ComponentsProps {
  setShowSignUpBox: any
  setShowConnectPop: any
  children: any
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const Layout: FunctionComponent<Props> = ({ children, GetUserDetails, auth: { userDetails } }) => {

  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  const getUserDetails = async (access_token: string) => {
    const decoded_jwt = await jwtDecode(cookies.access_token) as {
      exp: number, iat: number, id: string, name: string
    }
    // console.log(decoded_jwt, "decoded_jwt")
    if (decoded_jwt.id) {
      //get user details action
      GetUserDetails(decoded_jwt.id)
    }
  }

  useEffect(() => {
    // console.log(cookies.access_token)
    if (cookies.access_token) {
      getUserDetails(cookies.access_token)
    }
  }, [])

  return (
    <div className={styles.mainDiv}>
      <div className={styles.topNav}>
        <NavIndex />
      </div>
      <div className={styles.childrenDiv}>
        <main>{children}</main>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}


const mapStateToProps = (state: AppState): LinkStateProps => ({
  auth: state.auth
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  GetUserDetails: bindActionCreators(GetUserDetails, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
