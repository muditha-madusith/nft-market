import React, { useEffect } from 'react';
import styles from './index.module.css';
import NFT from '../../../../public/images/NFT.png';
import { useState } from 'react';
import Image from 'next/image';
import PaysuccesPop from '../PaysuccesPop';
import TostMessage from '../../Common/ToastMessage';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';


interface NftDetails {
    image: string;
    name: string;
    price: number;
    description: string;
    creator: string;
    quantity: number;
}

interface CreatorDetails {
    username: string;
    profileUrl: string;
}


const CheckoutPop = ({ setIsOpen, isOpen }: any) => {

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
        axios.get(`https://nft-market-api-production.up.railway.app/api/nft/nfts/${id}`)
            .then((response) => {
                if (!nftDetails) {
                    setNftDetails(response.data);
                }
                // console.log(userDetails);

                if (nftDetails) {
                    axios.get(`https://nft-market-api-production.up.railway.app/api/user/users/${creatorId}`)
                        .then((response) => {
                            setCreatorDetails(response.data)
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }, [id, nftDetails])

    return (
        <>
            {paymentSuccess ? (
                <>
                    <PaysuccesPop
                        setPaymentSuccess={setPaymentSuccess}
                        setIsOpen={setIsOpen}
                        imgUrl={nftDetails?.image}
                        nftName={nftDetails?.name}
                        creator={creatorDetails?.username}
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
                                        <p className={styles.p1}>{creatorDetails?.username ?? 'Loading..'}</p>
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

export default CheckoutPop;