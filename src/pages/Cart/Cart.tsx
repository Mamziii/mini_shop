import "./Cart.css";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

// components
import CartItem from "../../components/CartItem/CartItem";

export default function Cart() {
  const { cart } = useCart();
  const delivery = 5.0;
  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const orderTotal = delivery + subTotal;
  const totalCartLength = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="cart_container">
        <div className="content">
          <div className="title">
            <span>products in cart :</span>
            <span>{totalCartLength}</span>
          </div>

          {cart.length > 0 ? (
            <>
              <div className="cart_section">
                <div className="cart_items">
                  {cart.map((product) => (
                    <CartItem {...product} key={product.id} />
                  ))}
                </div>

                <div className="peyment_section">
                  <div className="order_summary">
                    <h3>Order Summary</h3>
                  </div>

                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span>$${subTotal.toFixed(2)}</span>
                  </div>

                  <div className="line"></div>

                  <div className="shipping_estimate">
                    <span>Shipping stimate</span>
                    <span>${delivery.toFixed(2)}</span>
                  </div>

                  <div className="line"></div>

                  <div className="order_total">
                    <span>Order total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>

                  <div className="checkout_btn">
                    <button>Chekhout</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="empty_cart">
                <div className="image">
                  <img src="./empty-cart.png" alt="" />
                </div>
                <Link to={"/"}>Go Back To Shop</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
