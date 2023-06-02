import React from 'react'
import styles from './index.module.css'
import ProfileHead from '../Layout/ProfileHead'
import Grid from '../Grid'

const ProfileComp = () => {
  return (
    <>
    <ProfileHead />
    <div className={styles.content}>
       <Grid/>
    </div>
    </>
  )
}
export default ProfileComp;