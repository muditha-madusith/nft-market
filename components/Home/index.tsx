import React from 'react'
import NavIndex from '../NavBar'
import styles from './index.module.css'
import { Section1 } from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { Section4 } from './Section4'

const HomeIndex = () => {
  return (
    <>
      <NavIndex/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </>
  )
}

export default (HomeIndex);