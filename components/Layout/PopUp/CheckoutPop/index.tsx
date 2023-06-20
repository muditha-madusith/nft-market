import React, { FunctionComponent, useEffect } from 'react';
import styles from './index.module.css';
import { useState } from 'react';
import Image from 'next/image';
import PaysuccesPop from '../PaysuccesPop';
import TostMessage from '../../Common/ToastMessage';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { AppActions } from '@/redux/actions/AppActions';
import { GetSelectedNftDetails } from '@/redux/actions/selectednft';
import { GetSelectedUserDetails } from '@/redux/actions/selecteduser';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';


interface NftDetails {
    image: string;
    name: string;
    price: number;
    description: string;
    creator: string;
    quantity: number;
}

interface CreatorDetails {
    name: string;
    profileUrl: string;
}

interface LinkStateProps {
    snftD: any;
    susrD: any;
}

interface LinkDispatchProps {
    GetSelectedNftDetails: (id: string) => void
    GetSelectedUserDetails: (id: string) => void
}

interface ComponentsProps {
    setIsOpen: any;
    isOpen: any;
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const CheckoutPop: FunctionComponent<Props> = ({ setIsOpen, isOpen, GetSelectedNftDetails, GetSelectedUserDetails, snftD, susrD }) => {

    const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

    const handleClick: any = () => {
        setPaymentSuccess(true);
        toast.success('Payment Success!', {
            position: toast.POSITION.TOP_RIGHT,
        })
    }

    const handleCancel: any = () => {
        setIsOpen(!isOpen)
    }

    const router = useRouter();
    const { id }: any = router.query;

    const [nftDetails, setNftDetails] = useState<NftDetails | null>(null);
    const [creatorDetails, setCreatorDetails] = useState<CreatorDetails | null>(null);

    const creatorId = nftDetails?.creator;

    useEffect(() => {
        GetSelectedNftDetails(id);
    },[]);

    useEffect(() => {
        setNftDetails(snftD);
    },[snftD]);

    useEffect(() => {
        GetSelectedUserDetails(snftD.creator)
    },[snftD])

    useEffect(() => {
        setCreatorDetails(susrD);
    },[snftD])

    return (
        <>
            {paymentSuccess ? (
                <>
                    <PaysuccesPop
                        setPaymentSuccess={setPaymentSuccess}
                        setIsOpen={setIsOpen}
                        imgUrl={nftDetails?.image}
                        nftName={nftDetails?.name}
                        creator={creatorDetails?.name}
                    />
                    <TostMessage />
                </>
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
                                    <Image src={nftDetails?.image ?? ''} alt='NFT' className={styles.img} width={200} height={200}/>
                                    <div className={styles.b1}>
                                        <p className={styles.p1}>{creatorDetails?.name ?? 'Loading..'}</p>
                                        <p className={styles.p2}>{nftDetails?.name ?? 'Loading..'}</p>
                                    </div>
                                </div>
                                <p className={styles.p1}>{nftDetails?.price ?? 'Loading..'} <b>ETH</b></p>
                            </div>
                            <div className={styles.f}>
                                <p className={styles.p1}>Total</p>
                                <p className={styles.p1}>{nftDetails?.price ?? 'Loading..'} <b>ETH</b></p>
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


const mapStateToProps = (state: AppState): LinkStateProps => ({
    snftD: state.selectedNft.nftDetails,
    susrD: state.selectedUser.userDetails
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    GetSelectedNftDetails: bindActionCreators(GetSelectedNftDetails, dispatch),
    GetSelectedUserDetails: bindActionCreators(GetSelectedUserDetails, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPop);