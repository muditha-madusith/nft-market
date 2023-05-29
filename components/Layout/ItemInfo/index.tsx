import React from 'react'
import styles from './index.module.css'
import Image from 'next/image';
import NFT from '../../../public/images/NFT.png'
import profile from '../../../public/images/profile.png'
import { useState } from 'react';
import CheckoutPop from '../PopUp/CheckoutPop';

const ItemInfo = () => {

    const [isOpen, setIsOpen] = useState(false);

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
                        src={NFT}
                        alt='NFT'
                        className={styles.img}>
                    </Image>
                </div>
                <div className={styles.right_side}>
                    <div className={styles.content1}>
                        <p className={styles.p}>Abstact Smoke Red Blue</p>
                        <p className={styles.p1}>From <b>4.5 ETH</b> - 20 of 25 available</p>
                    </div>
                    <div className={styles.content2}>
                        <p className={styles.p2}>Creator</p>
                        <div className={styles.c_details}>
                            <Image
                                src={profile}
                                alt='pro-pic'
                                className={styles.small_pro}>
                            </Image>
                            <p className={styles.name}>Mia Ayana</p>
                        </div>
                    </div>
                    <div className={styles.content3}>

                        <ul className={styles.ul}>
                            <li>Details</li>
                            <li>Offers</li>
                            <li>History</li>
                        </ul>

                        <hr className={styles.hr} />

                        <p className={styles.p3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, magnam in eaque iusto ab dolorem, nostrum dicta explicabo eos quia soluta fuga molestiae accusamus itaque rem debitis labore placeat quasi quam, alias quos! Suscipit, ullam consequuntur deserunt pariatur, autem esse quod aut necessitatibus assumenda fugit qui dolore reiciendis, minus tempora.</p>

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