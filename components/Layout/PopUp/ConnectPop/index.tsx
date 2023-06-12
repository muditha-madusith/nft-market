import React from 'react'
import styles from './index.module.css'
import { useState, useEffect, useRef } from 'react';
import SignUpBox from './SignUpBox';
import axios from "axios";


const ConnectPop = ({ setShowConnectPop, setIsLoggedIn }: any) => {

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


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(e: any) {

    e.preventDefault(); // prevent page from refreshing

    const newUser = {
        email,
        password,
    }

    setEmail('');
    setPassword('');

    axios.post("https://nft-market-api-production.up.railway.app/api/user/login", newUser).then((response) => {
        // alert("User login successful...")
        // console.log("User login successful...");
        const { token } = response.data;
        // Store token 
        localStorage.setItem('token', token);
        // Store token in cookies
        document.cookie = `token=${token}; path=/;`;
        setShowConnectPop(false);
        setIsLoggedIn(true);
    }).catch((err) => {
        alert(err)
    })
  };



  return (
    <div className={styles.pop} >
      {showSignUpBox ? (
        <SignUpBox setShowSignUpBox={setShowSignUpBox} setShowConnectPop={setShowConnectPop}/>
      ) : (
      <div className={styles.box} ref={popRef}>
        <h2 className={styles.h2}>Login or Signup</h2>
        <form action="post" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.sect}>
            <label className={styles.label}>Email</label>
            <input type="email" name="email" id="email" className={styles.inp_box} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className={styles.sect}>
            <label className={styles.label}>Password</label>
            <input type="password" name="password" id="password" className={styles.inp_box} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
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