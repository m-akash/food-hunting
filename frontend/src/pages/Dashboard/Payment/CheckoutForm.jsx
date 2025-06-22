import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { showSuccessAlert, showErrorAlert } from "../../../utils/alertUtils";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((price, item) => price + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment Error", error);
      setErrorMessage(error.message);
      showErrorAlert(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setErrorMessage("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
      showErrorAlert("Failed to confirm payment.");
    } else {
      console.log("Payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id: ", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const paymentInfo = {
          email: user.email,
          totalPrice: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartId: cart.map((item) => item.id),
          menuItemId: cart.map((item) => item.itemId),
          status: "success",
        };
        const res = await axiosSecure.post("/payments", paymentInfo);
        console.log("Payment Saved: ", res);
        refetch();
        if (res.data.paymentInfo._id) {
          showSuccessAlert("Payment Successful!");
          navigate("/dashboard/cart");
        }
      }
    }
  };
  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 lg:p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Secure Payment
        </h2>
        <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !elements || !clientSecret}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
        >
          Pay {totalPrice > 0 ? `$${totalPrice.toFixed(2)}` : ""}
        </button>
        {transactionId && (
          <p className="text-green-600 text-center font-semibold pt-2">
            Transaction Successful! <br />
            <span className="text-sm font-normal">ID: {transactionId}</span>
          </p>
        )}
        {errorMessage && (
          <div className="text-red-600 text-center font-medium pt-2">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
