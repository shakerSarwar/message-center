import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";


const useOptions = () => {
    const fontSize = "18px";
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const SplitCardForm = ({ handelPayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });


        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            setPaymentError(null)
            setPaymentSuccess(paymentMethod.id)
            handelPayment(paymentMethod.id)
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit} className="col-md-8">
                <label className="d-block mb-3">
                    Card number
                <CardNumberElement
                        className="form-control"
                        options={options}
                    />
                </label>

                <label className="d-block mb-3">
                    Expiration date
                <CardExpiryElement
                        className="form-control"
                        options={options}
                    />
                </label>


                <label className="d-block mb-3">
                    CVC
                <CardCvcElement
                        className="form-control"
                        options={options}
                    />
                </label>

                <button type="submit" disabled={!stripe} className="btn btn-primary">
                    Pay
                </button>
            </form>
            {paymentError && <p className="text-danger mt-3">{paymentError}</p>}
            {paymentSuccess && <p className="text-success mt-3">Your Payment Have successfully Recived</p>}
        </>

    );
};

export default SplitCardForm;