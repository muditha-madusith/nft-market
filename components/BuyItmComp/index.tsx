import React from 'react';
import styles from './index.module.css';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../PaymentForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NN7j0JL221D41TakcTXqnRrxLbfDOgjns0sf8x0xKlkzGOy6KdwzGJd3zdCF5QkXshOF5zNmsYXpyCnYQWTrjcu00gjtZHqyN');

const BuyItmComp = () => {
  return (
    <div className={styles.back}>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default BuyItmComp;
