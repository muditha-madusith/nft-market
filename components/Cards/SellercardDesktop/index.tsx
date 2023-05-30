import React from 'react'
import styles from './index.module.css'
import Profile from '../../../public/images/profile.png'
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import Image from 'next/image'

const SellercardDesktop = () => {
  return (
    <Link href="/profile" style={{ textDecoration: 'inherit', color: 'white' }}>
      <div className={styles.back}>
        <div className={styles.card}>
          <div className={styles.numbdiv}>
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.propic}>
            <Image
              src={Profile}
              alt='profile'
              className={styles.img}>
            </Image>
            <div className={styles.checkdiv}>
              <div className={styles.check}>
                <CheckIcon
                  style={{ fontSize: 'small' }} />
              </div>
            </div>
          </div>
          <div className={styles.name_revenue}>
            <p className={styles.name}>Mia Ayana</p>
            <div className={styles.revenue}>
              <p className={styles.p1}><b>0</b></p>
              <p className={styles.p1}>ETH</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default SellercardDesktop;