import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from '../SplitCardForm/SplitCardForm';

const stripePromise = loadStripe('pk_test_51Ie5hAKpKq207vNFE6Nnjrbd4FMxAkGdXaH2ewlcjrexLWaiy5Vw95i7QBzfHz2sppIpglGe7OT4WtE85kMejuvd00OrSmDVw1');

const ProcessPayment = ({ handelPayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm handelPayment={handelPayment} />
        </Elements>
    );
};

export default ProcessPayment;