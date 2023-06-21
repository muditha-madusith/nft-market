import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './index.module.css';
import { useCookies } from 'react-cookie';

import { AppActions } from '@/redux/actions/AppActions';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CreateNft } from '@/redux/actions/nfts';

interface LinkStateProps {

}

interface LinkDispatchProps {
  CreateNft: (formData: {}, token: string) => void
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;

const ItmForm: FunctionComponent<Props> = ({CreateNft}) => {

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const resetForm = () => {
    setImage('');
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  const [cookies, setCookie] = useCookies(['access_token']);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = cookies.access_token;

        // Create an object with the form data
        const formData = {
          image,
          name,
          description,
          price,
          quantity
        };


    CreateNft(formData, token)

    resetForm(); 
  };

  return (
    <>
      <div className={styles.back}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.h3}>Create new Item</h3>
          <div className={styles.sect1}>
            <label className={styles.p}>Upload Link</label>
            <p className={styles.p1}>Upload your NFT to Google drive and create it public. <br /> After that copy the image id and upload it like this "https://drive.google.com/uc?id=YOUR-IMAGE-ID" <br />or any other public image link.</p>
            <input
              type="text"
              name="nftLink"
              className={styles.namebox}
              placeholder="Your NFT uploaded link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className={styles.sect2}>
            <label className={styles.p}>Name</label>
            <input
              type="text"
              name="name"
              className={styles.namebox}
              placeholder="Item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.sect3}>
            <label className={styles.p}>Description</label>
            <textarea
              name="desc"
              id="desc"
              className={styles.descbox}
              placeholder="Description of your item"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.sect4}>
            <div>
              <label className={styles.p}>Price</label>
              <div className={styles.sect3_1}>
                <input
                  type="number"
                  name="price"
                  className={styles.pricecbox}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <select id="cars" name="cars" className={styles.selector}>
                  <option value="volvo">ETH</option>
                </select>
              </div>
            </div>
            <div className={styles.flex_row}>
              <label className={styles.p}>Quantity</label>
              <input
                type="number"
                name="quantity"
                className={styles.pricecbox}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.btn}>
            <button type="submit" className={styles.sbm_btn}>
              Create Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};


const mapStateToProps = (state: AppState): LinkStateProps => ({

});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  CreateNft: bindActionCreators(CreateNft, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItmForm);