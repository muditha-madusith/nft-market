import React, { useState, useEffect, useContext, FunctionComponent } from 'react';
import styles from './index.module.css';
import DarkLogo from '../../../public/DarkLogo.png';
import MobileDarkLogo from '../../../public/MobileDarkLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
import { Input } from '@mui/material';
import ConnectPop from '../PopUp/ConnectPop';
import axios from 'axios';

import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import { AppActions } from '@/redux/actions/AppActions';
import { GetUserDetails, LogoutUser } from '@/redux/actions/auth';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

interface LinkStateProps {
}

interface LinkDispatchProps {
  LogoutUser:() => any
}

interface ComponentsProps {
}


interface searchedNft {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  creator: string;
  quantity: number;
}


type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const NavIndex: FunctionComponent<Props>  = ({LogoutUser}) => {

  const [display, setDisplay]: any = useState('none');
  const [showConnectPop, setShowConnectPop]: any = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<any>(false);

  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  useEffect(() => {

    const checkTokenExpiration = () => {
      const token = cookies.access_token;
      
      if (token) {
        const decodedToken = jwtDecode(token) as { [key: string]: any };
        const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
        const isExpired = decodedToken.exp < currentTime;

        if (isExpired) {
          setIsLoggedIn(false);
          removeCookie("access_token");
        } else {
          setIsLoggedIn(true);
        }
      } else {
        setIsLoggedIn(false);
      }
    }
    
    checkTokenExpiration();
  }, [cookies]);

  const handleLogout = () => {
    LogoutUser();
    removeCookie("access_token");
  };

  const clickConnect: any = () => {
    setShowConnectPop(true);
  }
  const clickMobileConnect: any = () => {
    setShowConnectPop(true);
    setDisplay('none');
  }

  const clickBtn: any = () => {
    setDisplay((prevDisplay: any) => (prevDisplay === 'none' ? 'flex' : 'none'));
  }

  const router = useRouter();

  const navigateToMyItems = () => {
    if (isLoggedIn) {
      router.push('/my-items');
    } else {
      alert("To view Your items login first..")
    }
  };


  // const [searchingName, setSearchingName] = useState('');
  // const [searchedNft, setSearchedNft] = useState<searchedNft | null>(null);


  // const handleSearch = () => {
  //   axios.get(`http://localhost:8000/api/nft/search-nfts?name=${searchingName}`)
  //   .then((response) => {
  //     setSearchedNft(response.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  // }

  // console.log(searchedNft)



  return (
    <>
      {showConnectPop && (
        <ConnectPop setShowConnectPop={setShowConnectPop} setIsLoggedIn={setIsLoggedIn} />
      )}
      <div className={styles.desktop_nav}>
        <Link href="/" style={{ textDecoration: 'inherit', padding: 0, margin: 0 }} className={styles.desktop_dark_logo}>
          <Image
            className={styles.desktop_dark_logo}
            src={DarkLogo}
            alt={"Desktop Dark Logo"}
          />
        </Link>
        <Link href="/" style={{ textDecoration: 'inherit', padding: 0, margin: 0 }} className={styles.mobile_dark_logo}>
          <Image
            className={styles.mobile_dark_logo}
            src={MobileDarkLogo}
            alt={"Mobile Dark Logo"}
          />
        </Link>
        <div className={styles.search_box}>
          <div className={styles.s_icon} ><SearchIcon /></div>
          {/* <SearchIcon /> */}
          <Input
            style={{ color: '#fff' }}
            className={styles.s_input}
            placeholder="Search Item Here"
            // value={searchingName}
            // onChange={(e) => setSearchingName(e.target.value)}
          />
        </div>
        <div>
          <ul className={styles.ul}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', padding: 0, margin: 0 }} >
              <li className={router.asPath === '/' ? styles.activeLink : styles.li}>Explore</li>
            </Link>
            <li className={router.asPath === '/my-items' ? styles.activeLink : styles.li} onClick={navigateToMyItems}>My Items</li>
            <li className={styles.li}>Following</li>
          </ul>
        </div>
        <div className={styles.btns}>
          <div>
            <Link href="/create-item" style={{ textDecoration: 'inherit', padding: 0, margin: 0 }}>
              <button className={styles.cr_btn}>Create</button>
            </Link>
          </div>
          <div>
            {isLoggedIn ?
              (<button className={styles.co_btn} onClick={handleLogout}>Logout</button>) :
              (<button className={styles.co_btn}
                onClick={clickConnect}>
                Connect
              </button>)}
          </div>
        </div>
      </div>

      <div className={styles.mobile_nav}>
        <Link href="/" style={{ textDecoration: 'inherit', padding: 0, margin: 0 }} className={styles.desktop_dark_logo}>
          <Image
            className={styles.desktop_dark_logo}
            src={DarkLogo}
            alt={"Desktop Dark Logo"}
          />
        </Link>
        <Link href="/" style={{ textDecoration: 'inherit', padding: 0, margin: 0 }} className={styles.mobile_dark_logo}>
          <Image
            className={styles.mobile_dark_logo}
            src={MobileDarkLogo}
            alt={"Mobile Dark Logo"}
          />
        </Link>
        <div className={styles.mobile_search_box} style={{ display: display === 'none' ? 'flex' : 'none' }}>
          <SearchIcon />
          <Input
            style={{ color: '#fff' }}
            className={styles.mobile_s_input}
            placeholder="Search Item Here"
          />
        </div>
        <div className={styles.humburg} onClick={clickBtn}>
          <MenuIcon fontSize='large' style={{ display: display === 'none' ? 'block' : 'none' }} />
          <CloseIcon fontSize='large' style={{ display: display === 'none' ? 'none' : 'block' }} />
        </div>
      </div>

      <div className={styles.menulist} style={{ display: display === 'none' ? 'none' : 'flex' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', padding: 0, margin: 0 }} >
          <p className={router.asPath === '/' ? styles.activeP1 : styles.p1}>Explore</p>
        </Link>
        <p className={styles.p1} onClick={navigateToMyItems}>My Items</p>
        <p className={styles.p1}>Following</p>
        <div className={styles.btns1}>
          <div>
            <Link href="/create-item" style={{ textDecoration: 'inherit' }} >
              <button className={styles.cr1_btn}>Create</button>
            </Link>
          </div>
          <div>
            {
              isLoggedIn ?
                (
                  <button className={styles.co1_btn} onClick={handleLogout}>Logout</button>
                ) : (
                  <button className={styles.co1_btn}
                    onClick={clickMobileConnect}>
                    Connect
                  </button>
                )
            }
          </div>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state: AppState): LinkStateProps => ({
  auth: state.auth
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  LogoutUser: bindActionCreators(LogoutUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavIndex);
