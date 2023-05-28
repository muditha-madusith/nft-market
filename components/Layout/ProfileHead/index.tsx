import React from 'react'
import styles from './index.module.css'
import Image from 'next/image';
import cover from '../../../public/images/cover.png'
import profile from '../../../public/images/profile.png'

const ProfileHead = () => {
  return (
    <div className={styles.back}>
        <div className={styles.cover4to}>
            <Image
            src={cover}
            alt='CoverImage'
            style={{padding: 0, objectFit: 'cover', width: '100%', height: '100%'}}>
            </Image>
        </div>
        <div className={styles.prsect}>
            <div className={styles.prnm}>
                  <Image
                  src={profile}
                  alt='ProfileImage'
                  className={styles.pro4to}>
                  </Image>
                  <h2>Mia Ayana</h2>
            </div>
        </div>
    </div>
  )
}

export default ProfileHead;
