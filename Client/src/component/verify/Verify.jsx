import { useEffect, useContext, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import "./Verify.css";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const tx_ref = searchParams.get("tx_ref");

  const { url = "http://localhost:3000", clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  // Guard against React 18 double-firing in StrictMode
  const isCalled = useRef(false);

  useEffect(() => {
    const verifyPayment = async () => {
      if (isCalled.current) return;
      isCalled.current = true;

      if (!orderId) {
        toast.error("Invalid order verification link.");
        navigate("/");
        return;
      }

      try {
        const response = await axios.post(`${url}/api/order/verify`, {
          success,
          orderId,
          tx_ref,
        });

        if (response.data.success) {
          if (clearCart) clearCart();
          toast.success("Payment successful! Your order is placed.");
          navigate("/myorders");
        } else {
          toast.error(
            response.data.message || "Payment failed or was cancelled.",
          );
          navigate("/");
        }
      } catch (error) {
        console.error("Verification error:", error);
        toast.error("Error verifying payment.");
        navigate("/");
      }
    };

    verifyPayment();
  }, [success, orderId, tx_ref, url, clearCart, navigate]);

  return (
    <div className="verify-container">
      <div className="verify-card">
        <div className="verify-spinner"></div>
        <h2 className="verify-title">Verifying your payment...</h2>
        <p className="verify-subtitle">
          Please wait while we confirm your transaction with Chapa.
        </p>
      </div>
    </div>
  );
};

export default Verify;
