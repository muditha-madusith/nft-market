import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import styles from './index.module.css'
import { useRouter } from 'next/router';
import { AppActions } from '@/redux/actions/AppActions';
import { AppState } from '@/redux/store';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import ItemInfo from '../Layout/ItemInfo';
import { FunctionComponent } from 'react';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import { CreatePayment } from '@/redux/actions/payment';
import { bindActionCreators } from 'redux';

const stripePromise = loadStripe('pk_test_51NN7j0JL221D41TakcTXqnRrxLbfDOgjns0sf8x0xKlkzGOy6KdwzGJd3zdCF5QkXshOF5zNmsYXpyCnYQWTrjcu00gjtZHqyN');


interface LinkStateProps {
  logedUser: string;
}

interface LinkDispatchProps {
  CreatePayment: (userData:{}, id:string) => any
}

interface ComponentsProps {
}

type Props = LinkStateProps & LinkDispatchProps & ComponentsProps;


const PaymentForm: FunctionComponent<Props> = ({ logedUser, CreatePayment }) => {

  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  const { id }: any = router.query;

  const buyer = logedUser;

  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);


  const handleSubmit = async (event: any) => {

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      // Create a payment method using the CardElement
      const cardElement = elements.getElement(CardElement)!;
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.error('Error creating payment method:', error);
        // Handle the error
      } else {
        // Send the payment method ID to your backend server for further processing
        const paymentMethodId = paymentMethod.id;
        // Make an API request to your backend with the paymentMethodId
        // ...your code here
        const buyNFT = async (id: string) => {

          try {

            const userData: any = {
              buyer
            }

            // const response = await axios.post(`${process.env.BACKEND_BASE_URL}/api/nft/buy/${id}`,
            //   userData
            // );

            const response = CreatePayment(userData,id);

            if (!response) {
              const error = await response;
              throw new Error(error);
            }

            const data = await response;
            // Process the response data
            console.log(data);
            router.push({pathname: '/own-arts'})
          } catch (error) {
            console.error('Failed to buy NFT:', error);
            // Handle the error
          }
        };

        // Call the buyNFT function with the NFT ID
        buyNFT(id);
      }

    } catch (error) {
      console.error('Error creating payment method', error);
      // Handle the error
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className={styles.main}>
      <div className={styles.box}>
      <CardElement />
      <button type="submit" className={styles.btn}>Pay</button>
      </div>
    </form>
  );
};


const mapStateToProps = (state: AppState): LinkStateProps => ({
  logedUser: state.auth.userDetails.id
});
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  CreatePayment: bindActionCreators(CreatePayment, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);