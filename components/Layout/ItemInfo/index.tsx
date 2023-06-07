import React from 'react'
import styles from './index.module.css'
import Image from 'next/image';
import NFT from '../../../public/images/NFT.png'
import profile from '../../../public/images/profile.png'
import { useState } from 'react';
import CheckoutPop from '../PopUp/CheckoutPop';
import Link from 'next/link';
import DetailsComp from './DetailsComp';
import HistoryComp from './HistoryComp';
import OffersComp from './OffersComp';
import { useRouter } from 'next/router';


const ItemInfo = () => {

    const [isOpen, setIsOpen]: any = useState(false);
    const [detailsOpen, setDetailsOpen]: any = useState(true);
    const [offersOpen, setOffersOpen]: any = useState(false);
    const [historyOpen, setHistoryOpen]: any = useState(false);

    const clickDetails: any = () => {
        setDetailsOpen(true);
        setHistoryOpen(false);
        setOffersOpen(false);
    }
    const clickOffers: any = () => {
        setDetailsOpen(false);
        setHistoryOpen(false);
        setOffersOpen(true);
    }
    const clickHistory: any = () => {
        setDetailsOpen(false);
        setHistoryOpen(true);
        setOffersOpen(false);
    }


    const router = useRouter();

    const { src, name, price }:any = router.query;
    
    const imageUrl = src || NFT;
    
    

    return (
        <>
            {isOpen && (
                <>
                    <CheckoutPop setIsOpen={setIsOpen} isOpen={isOpen}/>
                </>
            )}
            <div className={styles.back}>
                <div className={styles.left_side}>
                    <Image
                        src={imageUrl}
                        alt='NFT'
                        className={styles.img}>
                    </Image>
                </div>
                <div className={styles.right_side}>
                    <div className={styles.content1}>
                        <p className={styles.p}>{name}</p>
                        <p className={styles.p1}>From <b>{price} ETH</b> - 20 of 25 available</p>
                    </div>
                    <div className={styles.content2}>
                        <p className={styles.p2}>Creator</p>
                        <Link href="/profile" style={{ textDecoration: 'inherit', color: 'white' }}>
                            <div className={styles.c_details}>
                                <Image
                                    src={profile}
                                    alt='pro-pic'
                                    className={styles.small_pro}>
                                </Image>
                                <p className={styles.name}>Mia Ayana</p>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.content3}>

                        <ul className={styles.ul}>
                            <li className={ detailsOpen ? styles.activeDetails : styles.li}
                            onClick={clickDetails}>
                                Details
                            </li>
                            <li className={offersOpen ? styles.activeOffers : styles.li}
                            onClick={clickOffers}>
                                Offers
                            </li>
                            <li className={historyOpen ? styles.activeHistory : styles.li}
                            onClick={clickHistory}>
                                History
                            </li>
                        </ul>

                        {detailsOpen && (
                            <DetailsComp/>
                        )}
                        
                        {historyOpen && (
                            <HistoryComp/>
                        )}

                        {offersOpen && (
                            <OffersComp/>
                        )}

                        <div className={styles.btns}>
                            <div>
                                <button className={styles.buybtn}
                                    onClick={() => setIsOpen(true)}>
                                    Buy for 4.5 ETH
                                </button>
                            </div>
                            <div>
                                <button className={styles.ofrbtn}>
                                    Make Offer
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemInfo;