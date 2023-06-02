import React from 'react';
import styles from './index.module.css';
import { useState, useEffect, useRef } from 'react';
import axios from "axios";


const SignUpBox = ({ setShowSignUpBox, setShowConnectPop }: any) => {
    
    const popRef: any = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside: any = (event: MouseEvent) => {
            if (popRef.current && !popRef.current.contains(event.target as Node)) {
                setShowSignUpBox(false);
                setShowConnectPop(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setShowSignUpBox]);

    const clickLoginBtn: any = () => {
        setShowSignUpBox(false);
    }

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    function handleSubmit(e: any) {

        e.preventDefault(); // prevent page from refreshing

        const newUser = {
            username,
            email,
            password,
            password2
        }

        setUserName('');
        setEmail('');
        setPassword('');
        setPassword2('');

        axios.post("http://localhost:5000/api/user/register", newUser).then(() => {
            // alert("User registration successful...")
            // console.log("User registration successful...");
        }).catch((err) => {
            alert(err)
        })
    };

    return (
        <div className={styles.box} ref={popRef}>
            <h2 className={styles.h2}>Create an Account</h2>
            <form action="post" className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.sect}>
                    <label className={styles.label}>Name</label>
                    <input type="text" name="name2" id="name" value={username} onChange={(e) => {
                        setUserName(e.target.value)
                    }} className={styles.inp_box} />
                </div>
                <div className={styles.sect}>
                    <label className={styles.label}>Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} className={styles.inp_box} />
                </div>
                <div className={styles.sect}>
                    <label className={styles.label}>Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} className={styles.inp_box} />
                </div>
                <div className={styles.sect}>
                    <label className={styles.label}>Confirm Password</label>
                    <input type="password" name="password2" id="password2" value={password2} onChange={(e) => {
                        setPassword2(e.target.value)
                    }} className={styles.inp_box} />
                </div>
                <div className={styles.btn_div}>
                    <button type="submit" className={styles.submit_btn}>Create Account</button>
                </div>
            </form>
            <p className={styles.p}>Back to<span className={styles.sup_btn}
            onClick={clickLoginBtn}>
                Login
            </span></p>
        </div>
    )
}

export default SignUpBox;