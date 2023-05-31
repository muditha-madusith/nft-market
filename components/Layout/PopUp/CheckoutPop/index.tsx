import React from 'react';
import styles from './index.module.css';
import NFT from '../../../../public/images/NFT.png';
import { useState } from 'react';

import Image from 'next/image';
import PaysuccesPop from '../PaysuccesPop';

const CheckoutPop = ({setIsOpen, isOpen}: any) => {

  const [paymentSuccess, setPaymentSuccess] = useState(false);


  const handleClick: any = () => {
    setPaymentSuccess(true);
  }

  const handleCancel: any = () => {
    setIsOpen(!isOpen)
  }


  return (
      <>
          {paymentSuccess ? (
              <PaysuccesPop setPaymentSuccess={setPaymentSuccess} paymentSuccess={paymentSuccess} isOpen={isOpen} setIsOpen={setIsOpen}/>
          ) : (
              <div className={styles.pop} >
                  <div className={styles.box}>
                      <div className={styles.head}>
                          <h2 className={styles.h2}>Check Out</h2>
                      </div>
                      <div className={styles.details}>
                          <div className={styles.h}>
                              <p className={styles.p1}>Item</p>
                              <p className={styles.p1}>Subtotal</p>
                          </div>
                          <div className={styles.b}>
                              <div className={styles.img_name}>
                                  <Image
                                      src={NFT}
                                      alt='NFT'
                                      className={styles.img}>
                                  </Image>
                                  <div className={styles.b1}>
                                      <p className={styles.p1}>Mia Ayana</p>
                                      <p className={styles.p2}>Abstact Smoke Red Blue</p>
                                  </div>
                              </div>
                              <p className={styles.p1}>4.5 <b>ETH</b></p>
                          </div>
                          <div className={styles.f}>
                              <p className={styles.p1}>Total</p>
                              <p className={styles.p1}>4.5 <b>ETH</b></p>
                          </div>
                      </div>
                      <div className={styles.buttons}>
                          <div>
                              <button className={styles.co_btn}
                                  onClick={handleClick}>Checkout</button>
                          </div>
                          <div>
                              <button className={styles.ca_btn}
                                  onClick={handleCancel}>Cancel</button>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </>
  )
}

export default CheckoutPop;