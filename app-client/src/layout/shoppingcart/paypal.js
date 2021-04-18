import PayPalBtn from './paypalbutton'

const paypalSubscribe = (data, actions) => {
  return actions.subscription.create({
    'plan_id': "ARcoGqaijfaTb_rSft5kkInJcwrgkr05tlFCONnh6z3yzgTzrQ1nwYfN1KOvV9tI0__jrzXnncwlrQfY",
  });
};

const paypalOnError = (err) => {
  console.log("Error")
}

const paypalOnApprove = (data, detail) => {
  // call the backend api to store transaction details
  console.log("Payapl approved")
  console.log(data.subscriptionID)
};

function YourComponent() {
  return (
    <PayPalBtn
      amount="<amount>"
      currency="USD"
      createSubscription={paypalSubscribe}
      onApprove={paypalOnApprove}
      catchError={paypalOnError}
      onError={paypalOnError}
      onCancel={paypalOnError}
    />
  )
}

export default YourComponent