import React from 'react';
import styles from './index.module.css';
import Fileicon from '../../../public/Fileicon.png'
import Image from 'next/image';

const ItmForm = () => {
  return (
  <>
    <div className={styles.back}>
      <form className={styles.form}>
        <h3 className={styles.h3}>Create new Item</h3>
        <div className={styles.sect1}>
          <label className={styles.p}>Upload File</label>
          {/* <input type="file" name="image" className={styles.filebox} /> */}
          <div className={styles.filebox}>
            <p className={styles.ptags}>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</p>
            <Image
            src={Fileicon}
            alt='FileIcon'
            className={styles.img}></Image>
            <div className={styles.f}>
              <p className={styles.p1}>Drag and Drop Files</p>
              <p className={styles.p2}>or browse media on your device</p>
            </div>
          </div>
        </div>
        <div className={styles.sect2}>
          <label className={styles.p}>Name</label>
          <input type="text" name="name" className={styles.namebox} placeholder='Item name'/>
        </div>
        <div className={styles.sect3}>
          <label className={styles.p}>Description</label>
          <textarea name="desc" id="desc" className={styles.descbox}placeholder='Description of your item'></textarea>
        </div>
        <div className={styles.sect3}>
          <label className={styles.p}>Price</label>
          <div className={styles.sect3_1}>
            <input type="number" name="name" className={styles.pricecbox} />
            <select id="cars" name="cars" className={styles.selector}>
              <option value="volvo">ETH</option>
              <option value="saab">USDT</option>
            </select>
          </div>
        </div>
        <div className={styles.btn}>
          <button type='submit' className={styles.sbm_btn}>Create Item</button>
        </div>
      </form>
    </div>
  </>
  )
}

export default ItmForm;