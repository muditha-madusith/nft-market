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

import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import { AppActions } from '@/redux/actions/AppActions';
import { GetUserDetails, LogoutUser } from '@/redux/actions/auth';
import { GetSeller } from '@/redux/actions/seller'
import { GetSearchNft } from '@/redux/actions/searchnfts';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';



interface LinkStateProps {
  auth: {};
  snft: any;
}

interface LinkDispatchProps {
  LogoutUser: () => any
  GetSearchNft: (item_name: string) => any
  GetSeller: (id: string) => any
}

interface ComponentsProps {
}


// interface searchedNft {
//   _id: string;
//   image: string;
//   name: string;
//   price: number;
//   description: string;
//   creator: string;
//   quantity: number;
// }


type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const NavIndex: FunctionComponent<Props> = ({ LogoutUser, auth, GetSearchNft, snft, GetSeller }) => {

  const [display, setDisplay]: any = useState('none');
  const [showConnectPop, setShowConnectPop]: any = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<any>(false);
  const [searchName, setSearchName]: any = useState("");

  const [searchedNfts, setSearchedNfts]: any = useState("")


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
    GetSeller("");
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
    }
  };

  const navigateToOwnArts = () => {
    if (isLoggedIn) {
      router.push('/own-arts');
    }
  };


  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchName(e.target.value);
    GetSearchNft(searchName);
  }

  useEffect(() => {
    if (snft) {
      setSearchedNfts(snft);
    }
  })

  function handleGetSearchNft() {
    console.log(searchedNfts)
  }

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
          <div className={styles.s_icon} onClick={handleGetSearchNft}><SearchIcon /></div>
          {/* <SearchIcon /> */}
          <Input
            style={{ color: '#fff' }}
            className={styles.s_input}
            placeholder="Search Art Here"
            onChange={handleSearchInput}
          />
        </div>
        <div>
          <ul className={styles.ul}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', padding: 0, margin: 0 }} >
              <li className={router.asPath === '/' ? styles.activeLink : styles.li}>Explore</li>
            </Link>
            {isLoggedIn ?
              (
                <li className={router.asPath === '/my-items' ? styles.activeLink : styles.li} onClick={navigateToMyItems}>My Arts</li>
              ) :
              (
                <li className={styles.notlogedLink} title='Login please'>My Arts</li>
              )
            }

            {isLoggedIn ?
              (
                <li className={styles.li} >OwnArt's</li>
              ) :
              (
                <li className={styles.notlogedLink} title='Login please'>OwnArt's</li>
              )
            }
          </ul>
        </div>
        <div className={styles.btns}>
          <div>
            {isLoggedIn ?
              (
                <Link href="/create-item" style={{ textDecoration: 'inherit', padding: 0, margin: 0 }}>
                  <button className={styles.cr_btn}>Create</button>
                </Link>
              ) :
              (
                <button className={styles.notLogedcr_btn} title='Login please'>Create</button>
              )
            }
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
          <div className={styles.s_icon} onClick={handleGetSearchNft}><SearchIcon /></div>
          <Input
            style={{ color: '#fff' }}
            className={styles.mobile_s_input}
            placeholder="Search Item Here"
            onChange={handleSearchInput}
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
        {isLoggedIn ?
          (
            <p className={styles.p1} onClick={navigateToMyItems}>My Items</p>
          ) :
          (
            <p className={styles.p1_notlogged}>My Items</p>
          )
        }

        {isLoggedIn ?
          (
            <p className={styles.p1}>OwnNFT's</p>
          ) :
          (
            <p className={styles.p1_notlogged}>OwnNFT's</p>
          )
        }
        <div className={styles.btns1}>
          <div>
            {
              isLoggedIn ?
                (
                  <Link href="/create-item" style={{ textDecoration: 'inherit' }} >
                    <button className={styles.cr1_btn}>Create</button>
                  </Link>
                ) : 
                (
                  <Link href="/" style={{ textDecoration: 'inherit' }} >
                    <button className={styles.cr1_btn_notL}>Create</button>
                  </Link> 
                )
            }
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
  auth: state.auth,
  snft: state.searchNft.nfts,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  LogoutUser: bindActionCreators(LogoutUser, dispatch),
  GetSearchNft: bindActionCreators(GetSearchNft, dispatch),
  GetSeller: bindActionCreators(GetSeller, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavIndex);
