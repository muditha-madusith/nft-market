import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './index.module.css'

import { AppActions } from '@/redux/actions/AppActions';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RegisterSeller } from "@/redux/actions/seller";
import { useCookies } from 'react-cookie';
import Link from 'next/link';


interface LinkStateProps {
}

interface LinkDispatchProps {
    RegisterSeller: (formData: {}, token: string) => void;
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;

const createSellerPop: FunctionComponent<Props> = ({ RegisterSeller }) => {

    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [branch, setBranch] = useState("");
    const [fullName, setFullName] = useState("");
    const [branchCode, setBranchCode] = useState("");
    const [error, setError] = useState("");

    const formData = {
        bankName,
        accountNumber,
        branch,
        fullName,
        branchCode
    }

    const [cookies, setCookie] = useCookies(["access_token"]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const token = cookies.access_token;

        RegisterSeller(formData, token)
    }


    return (
        <div className={styles.pop}>
            <div className={styles.box} >
                <h2 className={styles.h2}>Create Seller Account</h2>
                <form className={styles.form}>
                    <div className={styles.sect}>
                        <label className={styles.label}>Bank Name</label>
                        <input
                            type="text"
                            name="bankName"
                            id="bankName"
                            value={bankName}
                            onChange={(e) => {
                                setBankName(e.target.value);
                            }}
                            className={styles.inp_box}
                        />
                    </div>
                    <div className={styles.sect}>
                        <label className={styles.label}>Account Number</label>
                        <input
                            type="number"
                            name="accountNumber"
                            id="accountNumber"
                            value={accountNumber}
                            onChange={(e) => {
                                setAccountNumber(e.target.value);
                            }}
                            className={styles.inp_box}
                        />
                    </div>
                    <div className={styles.sect}>
                        <label className={styles.label}>Branch Name</label>
                        <input
                            type="text"
                            name="branch"
                            id="branch"
                            value={branch}
                            onChange={(e) => {
                                setBranch(e.target.value);
                            }}
                            className={styles.inp_box}
                        />
                    </div>
                    <div className={styles.sect}>
                        <label className={styles.label}>Your Full Name</label>
                        <input
                            type="fullName"
                            name="fullName"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value);
                            }}
                            className={styles.inp_box}
                        />
                    </div>
                    <div className={styles.sect}>
                        <label className={styles.label}>Your Bank branch code</label>
                        <input
                            type="number"
                            name="branchCode"
                            id="branchCode"
                            value={branchCode}
                            onChange={(e) => {
                                setBranchCode(e.target.value);
                            }}
                            className={styles.inp_box}
                        />
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.btn_div}>
                        <button onClick={handleSubmit} className={styles.submit_btn}>
                            Register
                        </button>
                    </div>
                    <p className={styles.back}>Back to <Link href='/'>Home</Link></p>
                </form>
            </div>
        </div>
    )
}


const mapStateToProps = (state: AppState): LinkStateProps => ({
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    RegisterSeller: bindActionCreators(RegisterSeller, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(createSellerPop);