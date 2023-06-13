import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';

const ItmForm = () => {

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    // Get the token from localStorage
    const token = localStorage.getItem('token');
    // console.log(token);

    // Create an object with the form data
    const formData = {
      image,
      name,
      description,
      price,
      quantity
    };

    try {
      // Make an API call to create the NFT
      const response = await axios.post('https://nft-market-api-production.up.railway.app/api/nft/create', formData, {
        headers: {
          Authorization: `${token}` // Send the token in the Authorization header
        }
      });
      // Handle the response
      console.log(response.data);
      resetForm(); 
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.back}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.h3}>Create new Item</h3>
          <div className={styles.sect1}>
            <label className={styles.p}>Upload Link</label>
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

export default ItmForm;