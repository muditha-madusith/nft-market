import React from 'react';
import styles from './index.module.css'
import Profile from '../../../public/images/profile.png'
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import Image from 'next/image'

const SellercardMobile = ({index, src, name, revenue}: any) => {
  return (
    <Link href="/profile" style={{ textDecoration: 'inherit', color: 'white' }}>
      <div className={styles.back}>
        <div className={styles.card}>
          <div className={styles.numbdiv}>
            <div className={styles.number}>{index}</div>
          </div>
          <div className={styles.propic}>
            <Image
              src={src}
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
            <p className={styles.name}>{name}</p>
            <div className={styles.revenue}>
              <p className={styles.p1}><b>{revenue}</b></p>
              <p className={styles.p1}>ETH</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default SellercardMobile;