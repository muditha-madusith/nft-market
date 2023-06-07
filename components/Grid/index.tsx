import React from 'react'
import styles from './index.module.css'
import { Container, Row, Col } from 'react-grid-system';
import NFTcardDesktop from '../Cards/NFTcardDesktop';
import NFTcardMobile from '../Cards/NFTcardMobile';
import NFT from '../../public/images/NFT.png'
import NFT1 from '../../public/images/NFT1.png'
import NFT2 from '../../public/images/NFT2.png'
import NFT3 from '../../public/images/NFT3.png'
import NFT4 from '../../public/images/NFT4.png'
import NFT5 from '../../public/images/NFT5.png'
import NFT6 from '../../public/images/NFT6.png'
import NFT7 from '../../public/images/NFT7.png'



const nftCardDetails = [
    {
        index: 1,
        src: NFT,
        name: "Abstact Smoke Red Blue",
        price: 10,
        likes: 10
    },
    {
        index: 2,
        src: NFT1,
        name: "Mountain Landscape",
        price: 40,
        likes: 10
    },
    {
        index: 3,
        src: NFT2,
        name: "Paint Color on Wall",
        price: 10,
        likes: 10
    },
    {
        index: 4,
        src: NFT3,
        name: "Abstract Patern",
        price: 50,
        likes: 10
    },
    {
        index: 5,
        src: NFT4,
        name: "White Line Grafiti",
        price: 10,
        likes: 10
    },
    {
        index: 6,
        src: NFT5,
        name: "Abstract Triangle",
        price: 80,
        likes: 10
    },
    {
        index: 7,
        src: NFT6,
        name: "Lake Landscape",
        price: 10,
        likes: 10
    },
    {
        index: 8,
        src: NFT7,
        name: "Blue Red Art",
        price: 20,
        likes: 10
    }
]


const Grid = () => {

    const firstRowCards = nftCardDetails.slice(0, 4);
    const secondRowCards = nftCardDetails.slice(4, 8);

    return (
        <div className={styles.div}>
            <Container className={styles.grid_container} fluid>
                {/* First Row */}
                <Row
                    debug
                    className={styles.row}
                    justify="center"
                    style={{ backgroundColor: 'transparent', margin: '0' }}
                >
                    {firstRowCards.map((card) => (
                        <Col
                            key={card.index}
                            debug
                            xs={6}
                            sm={5}
                            md={5}
                            lg={3}
                            className={styles.col}
                            style={{ outline: 'none', backgroundColor: 'transparent' }}
                        >
                            <NFTcardDesktop
                                src={card.src}
                                name={card.name}
                                price={card.price}
                                likes={card.likes}
                            />
                            <NFTcardMobile
                                src={card.src}
                                name={card.name}
                                price={card.price}
                                likes={card.likes}
                            />
                        </Col>
                    ))}
                </Row>

                {/* Second Row */}
                <Row
                    debug
                    className={styles.row}
                    justify="center"
                    style={{ backgroundColor: 'transparent', margin: '0' }}
                >
                    {secondRowCards.map((card) => (
                        <Col
                            key={card.index}
                            debug
                            xs={6}
                            sm={5}
                            md={5}
                            lg={3}
                            className={styles.col}
                            style={{ outline: 'none', backgroundColor: 'transparent' }}
                        >
                            <NFTcardDesktop
                                src={card.src}
                                name={card.name}
                                price={card.price}
                                likes={card.likes}
                            />
                            <NFTcardMobile
                                src={card.src}
                                name={card.name}
                                price={card.price}
                                likes={card.likes}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <div className={styles.loadButton}>
                <button className={styles.lm_btn}>Load More</button>
            </div>
        </div>
    )
}

export default Grid;