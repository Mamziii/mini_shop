import "./CartItem.css";

// icons
import { IoClose } from "react-icons/io5";

export default function CartItem() {
  return (
    <>
      <div className="cart_item_container">
        <div className="image">
          <img src="/sdsfs/sds" alt="dsgg" />
        </div>

        <div className="details">
          <div className="Product_cartItem_title">
            <span>product title</span>
          </div>

          <div className="category">
            <span>category</span>
          </div>

          <div className="price">
            <span>$10.00</span>
          </div>
        </div>

        <div className="quantity">
          <div className="delete_btn">
            <span className="btn">-</span>
          </div>

          <div className="quantity_number">
            <span>1</span>
          </div>

          <div className="add_btn">
            <span className="btn">+</span>
          </div>
        </div>

        <div className="remove_product_btn">
          <span><IoClose /></span>
        </div>
      </div>
    </>
  );
}
