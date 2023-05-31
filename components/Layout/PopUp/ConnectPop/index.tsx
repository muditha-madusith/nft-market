import React from 'react'
import styles from './index.module.css'
import { useState, useEffect, useRef } from 'react';
import SignUpBox from './SignUpBox';


const ConnectPop = ({ showConnectPop, setShowConnectPop }: any) => {

  const [showSignUpBox, setShowSignUpBox]: any = useState(false);
  const popRef: any = useRef<HTMLDivElement>(null);

  const clickSignUp: any = () => {
    setShowSignUpBox(true);
  }

  useEffect(() => {
    const handleClickOutside: any = (event: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(event.target as Node)) {
        setShowConnectPop(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowConnectPop]);

  return (
    <div className={styles.pop} >
      {showSignUpBox ? (
        <SignUpBox setShowSignUpBox={setShowSignUpBox} setShowConnectPop={setShowConnectPop}/>
      ) : (
      <div className={styles.box} ref={popRef}>
        <h2 className={styles.h2}>Login or Signup</h2>
        <form action="post" className={styles.form}>
          <div className={styles.sect}>
            <label className={styles.label}>Email</label>
            <input type="email" name="email" id="email" className={styles.inp_box} />
          </div>
          <div className={styles.sect}>
            <label className={styles.label}>Password</label>
            <input type="password" name="password" id="password" className={styles.inp_box} />
          </div>
          <div className={styles.btn_div}>
            <button type="submit" className={styles.submit_btn}>Login</button>
          </div>
        </form>
        <p className={styles.p}>Don't have an account ?<span className={styles.sup_btn}
          onClick={clickSignUp}>
          SignUp
        </span></p>
      </div>
      )}
    </div>
  )
}

export default ConnectPop;