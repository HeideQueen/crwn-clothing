import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_4AMC1E2XXJWMOPCwkSqeXmHh00IleCxIPj";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment successful!");
      })
      .catch(error => {
        console.log("payment error:", JSON.parse(error));
        alert(
          "There was an issue with your payment, please make sure you use the provided card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN-Clothing-Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is: $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
