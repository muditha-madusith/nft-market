import React from 'react'
import styles from './index.module.css'

const DetailsComp = ({desc}:any) => {
  return (
    <p className={styles.p3}>{desc}</p>
  )
}

export default DetailsComp;