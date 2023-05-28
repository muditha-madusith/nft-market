import React from 'react'
import styles from './index.module.css'
import NavIndex from '../Layout/NavBar'
import ProfileHead from '../Layout/ProfileHead'
import Grid from '../Grid'
import Footer from '../Layout/Footer'

const ProfileComp = () => {
  return (
    <>
    <NavIndex />
    <ProfileHead />
    <div className={styles.content}>
       <Grid/>
    </div>
    <Footer/>
    </>
  )
}
export default ProfileComp;