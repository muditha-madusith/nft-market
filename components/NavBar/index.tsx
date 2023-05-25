import React, { useState } from 'react'
import styles from './index.module.css'
import DarkLogo from '../../public/DarkLogo.png'
import MobileDarkLogo from '../../public/MobileDarkLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Image from "next/image";
import { Input } from '@mui/material';

const NavIndex = () => {

  const [display, setDisplay] = useState('none');

  const clickBtn = () => {
      setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
  }


  return (
    <>
      <div className={styles.desktop_nav}>
        <Image
          className={styles.desktop_dark_logo}
          src={DarkLogo}
          alt={"Desktop Dark Logo"}
        />
        <Image
          className={styles.mobile_dark_logo}
          src={MobileDarkLogo}
          alt={"Mobile Dark Logo"}
        />
        <div className={styles.search_box}>
          <SearchIcon />
          <Input
            className={styles.s_input}
            placeholder="Search Item Here"
          />
        </div>
        <div>
          <ul className={styles.ul}>
            <li>Explore</li>
            <li>My Items</li>
            <li>Following</li>
          </ul>
        </div>
        <div className={styles.btns}>
          <div>
            <button className={styles.cr_btn}>Create</button>
          </div>
          <div>
            <button className={styles.co_btn}>Connect</button>
          </div>
        </div>
      </div>

      <div className={styles.mobile_nav}>
        <Image
          className={styles.desktop_dark_logo}
          src={DarkLogo}
          alt={"Desktop Dark Logo"}
        />
        <Image
          className={styles.mobile_dark_logo}
          src={MobileDarkLogo}
          alt={"Mobile Dark Logo"}
        />
        <div className={styles.mobile_search_box}>
          <SearchIcon />
          <Input
            className={styles.mobile_s_input}
            placeholder="Search Item Here"
          />
        </div>
        <div className={styles.humburg} onClick={clickBtn}>
          <MenuIcon fontSize='large' style={{ display: display === 'none' ? 'block' : 'none' }} />
          <CloseIcon fontSize='large' style={{ display: display === 'none' ? 'none' : 'block' }} />
        </div>
      </div>
    </>
  )
}

export default NavIndex;