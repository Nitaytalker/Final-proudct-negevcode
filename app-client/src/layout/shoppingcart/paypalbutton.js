import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';

export function PayPalBtn(props) {
  const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
  const paypalKey = "ARcoGqaijfaTb_rSft5kkInJcwrgkr05tlFCONnh6z3yzgTzrQ1nwYfN1KOvV9tI0__jrzXnncwlrQfY"
  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => createSubscription(data, details)}
      onApprove={(data, details) => onApprove(data, details)}
      onError={(err) => onError(err)}
      catchError={(err) => catchError(err)}
      onCancel={(err) => onCancel(err)}
      options={{
        clientId: paypalKey,
        vault:true
      }}
      style={{
        shape: 'rect',
        color: 'gold',
        layout: 'horizontal',
        label: 'subscribe',
      }}
    />
  );
}

export default PayPalBtn;