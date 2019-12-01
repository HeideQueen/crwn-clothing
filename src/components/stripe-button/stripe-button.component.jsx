import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_4AMC1E2XXJWMOPCwkSqeXmHh00IleCxIPj";

  const onToken = token => {
    console.log(token);
    alert("Your payment has been processed successfully!");
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
