import React from 'react'
import styles from './index.module.css'
import DarkLogo from '../../public/DarkLogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

import Image from 'next/image'

export const Footer = () => {
  return (
    <div className={styles.back}>
        <div className={styles.upper_section}>
            <div className={styles.l_side}>
                  <div className={styles.flex}>
                      <Image
                          alt={"DarkLogo"}
                          src={DarkLogo}>
                      </Image>
                      <p className={styles.p}>Get the latest Updates</p>
                      <div className={styles.email_box}>
                          <input type="email" className={styles.input} placeholder='Your Email' />
                          <button className={styles.email_btn}>Email Me!</button>
                      </div>
                  </div>
            </div>
            <div className={styles.r_side}>
                  <div className={styles.r_flex}>
                      <div className={styles.l_set}>
                          <p className={styles.p1}>CryptoKet</p>
                          <ul className={styles.l_ul}>
                              <li>Explore</li>
                              <li>How it Works</li>
                              <li>Contact Us</li>
                          </ul>
                      </div>
                      <div className={styles.r_set}>
                          <p className={styles.p1}>Support</p>
                          <ul className={styles.r_ul}>
                              <li>Help center</li>
                              <li>Terms of service</li>
                              <li>Legal</li>
                              <li>Privacy policy</li>
                          </ul>
                      </div>
                  </div>
              </div>
        </div>
        <div className={styles.down_section}>
            <p className={styles.p2}>CrpytoKet, Inc. All Rights Reserved</p>
            <div className={styles.icons}>
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <TelegramIcon/>
            </div>
        </div>
    </div>
  )
}
