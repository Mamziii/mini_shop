import "./Cart.css";

// components
import CartItem from "../../components/CartItem/CartItem";


export default function Cart() {
  return (
    <>
      <div className="cart_container">
        <div className="content">
          <div className="title">
            <span>products in cart :</span>
            <span>9</span>
          </div>

          <div className="cart_section">
            <div className="cart_items">
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>

            </div>

            <div className="peyment_section">
              <div className="order_summary">
                <h3>Order Summary</h3>
              </div>

              <div className="subtotal">
                <span>Subtotal</span>
                <span>$99.00</span>
              </div>

              <div className="line"></div>

              <div className="shipping_estimate">
                <span>Shipping stimate</span>
                <span>$5.00</span>
              </div>

              <div className="line"></div>

              <div className="order_total">
                <span>Order total</span>
                <span>$114.00</span>
              </div>

              <div className="checkout_btn">
                <button>Chekhout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
