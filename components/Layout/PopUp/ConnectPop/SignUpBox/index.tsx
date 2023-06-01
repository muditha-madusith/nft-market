import React from 'react'
import styles from './index.module.css'
import { useState, useEffect, useRef } from 'react';


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

    return (
        <div className={styles.box} ref={popRef}>
            <h2 className={styles.h2}>Create an Account</h2>
            <form action="post" className={styles.form}>
                <div className={styles.sect}>
                    <label className={styles.label}>Name</label>
                    <input type="text" name="name2" id="name2" className={styles.inp_box} />
                </div>
                <div className={styles.sect}>
                    <label className={styles.label}>Email</label>
                    <input type="email" name="email" id="email" className={styles.inp_box} />
                </div>
                <div className={styles.sect}>
                    <label className={styles.label}>Password</label>
                    <input type="password" name="password" id="password" className={styles.inp_box} />
                </div>
                <div className={styles.sect}>
                    <label className={styles.label}>Confirm Password</label>
                    <input type="password" name="password2" id="password2" className={styles.inp_box} />
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