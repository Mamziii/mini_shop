import "./CheckoutPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        
        clearCart();
        navigate("/");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, clearCart, navigate]);
  return (
    <>
      <div className="checkout_container">
        <h2>Processing your order...</h2>
        <p>You will be redirected to the home page in</p>
        <span className="cout_down">{countdown}</span>
      </div>
    </>
  );
}
