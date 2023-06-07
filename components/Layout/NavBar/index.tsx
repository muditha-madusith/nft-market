import React, { useState, useEffect, useContext } from 'react';
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


const NavIndex: any = () => {

  const [display, setDisplay]: any = useState('none');
  const [showConnectPop, setShowConnectPop]: any = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<any>(false);

  useEffect(() => {
    const checkTokenExpiration = () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        const decodedToken = jwtDecode(token) as { [key: string]: any };
        const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
        const isExpired = decodedToken.exp < currentTime;

        if (isExpired) {
          // Token has expired, perform necessary actions (e.g., log out)
          setIsLoggedIn(false);
          localStorage.clear();
          // alert("Token has expired login again...")
        } else {
          // Token is still valid, continue with the app
          setIsLoggedIn(true);
        }
      } else {
        // Token doesn't exist in localStorage, handle accordingly
        setIsLoggedIn(false);
        localStorage.clear();
      }
    };

    checkTokenExpiration();
  }, []);


  const handleLogout = async () => {
    try {
      await axios.post('https://nft-market-api-production.up.railway.app/api/user/logout');
      setIsLoggedIn(false);
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
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
          <SearchIcon />
          <Input
            style={{ color: '#fff' }}
            className={styles.s_input}
            placeholder="Search Item Here"
          />
        </div>
        <div>
          <ul className={styles.ul}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', padding: 0, margin: 0 }} >
              <li className={router.asPath === '/' ? styles.activeLink : styles.li}>Explore</li>
            </Link>
            <li className={styles.li} >My Items</li>
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
        <p className={styles.p1}>My Items</p>
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

export default NavIndex;