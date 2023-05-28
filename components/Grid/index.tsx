import React from 'react'
import styles from './index.module.css'
import customStyles from './customStyles.module.css'
import { Container, Row, Col } from 'react-grid-system';
import { NFTcardDesktop } from '../Cards/NFTcardDesktop';
import { NFTcardMobile } from '../Cards/NFTcardMobile';
import Button from '@mui/material/Button';

export const Grid = () => {
  return (
      <div className={styles.div}>
          <Container className={styles.grid_container} fluid>
              <Row debug className={styles.row} justify='center' style={{backgroundColor: 'transparent', margin:'0' }} >
                  <Col debug xs={6} sm={5} md={5} lg={3} className={styles.col} style={{outline: 'none', backgroundColor: 'transparent'}}>
                      <NFTcardDesktop/>
                      <NFTcardMobile/>
                  </Col>
                  <Col debug xs={6} sm={5} md={5} lg={3} className={styles.col} style={{outline: 'none', backgroundColor: 'transparent'}} >
                      <NFTcardDesktop/>
                      <NFTcardMobile/>
                  </Col>
                  <Col debug xs={6} sm={5} md={5} lg={3} className={styles.col} style={{outline: 'none', backgroundColor: 'transparent'}} >
                      <NFTcardDesktop/>
                      <NFTcardMobile/>
                  </Col>
                  <Col debug xs={6} sm={5} md={5} lg={3} className={styles.col} style={{outline: 'none', backgroundColor: 'transparent'}} >
                       <NFTcardDesktop/>
                      <NFTcardMobile/>
                  </Col>
              </Row>
              <Row debug className={styles.row} justify='center' style={{backgroundColor: 'transparent',  margin:'0'}}>
                  <Col debug xs={6} sm={5} md={5} lg={3} className={styles.col} style={{outline: 'none', backgroundColor: 'transparent'}} >
                      <NFTcardDesktop/>
                      <NFTcardMobile/>
                  </Col>
                  <Col debug xs={6} sm={5} md={5} lg={3} className={styles.col} style={{outline: 'none', backgroundColor: 'transparent'}} >
                      <NFTcardDesktop/>
                      <NFTcardMobile/>
                  </Col>
                  <Col debug xs={6} sm={5} md={5} lg={3} className={styles.col} style={{outline: 'none', backgroundColor: 'transparent'}} >
                      <NFTcardDesktop/>
                      <NFTcardMobile/>
                  </Col>
                  <Col debug xs={6} sm={5} md={5} lg={3} className={styles.col} style={{outline: 'none', backgroundColor: 'transparent'}} >
                      <NFTcardDesktop/>
                      <NFTcardMobile/>
                  </Col>
              </Row>
          </Container>
          <div className={styles.loadButton}>
              <Button className={styles.lm_btn}>Load More</Button>
          </div>
      </div>
  )
}
