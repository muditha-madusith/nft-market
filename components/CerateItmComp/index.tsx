import React from 'react'
import styles from './index.module.css'
import NavIndex from '../Layout/NavBar';
import ItmForm from '../Layout/ItmForm';
import Footer from '../Layout/Footer';

const CreateItmComp = () => {
  return (
    <>
      <NavIndex />
      <ItmForm />
      <Footer />
    </>
  )
}

export default CreateItmComp;