import "./CartItem.css";
import { ProductType } from "../../types";
import { useCart } from "../../Context/CartContext";

// icons
import { IoClose } from "react-icons/io5";

export default function CartItem({
  title,
  image,
  category,
  price,
  quantity,
}: ProductType) {
  const { addToCart, deleteProduct, decreaseOneItem } = useCart();

  return (
    <>
      <div className="cart_item_container">
        <div className="image">
          <img src={image} alt={title} />
        </div>

        <div className="details">
          <div className="Product_cartItem_title">
            <span>{title}</span>
          </div>

          <div className="category">
            <span>{category}</span>
          </div>

          <div className="price">
            <span>${price}</span>
          </div>
        </div>

        <div className="quantity">
          <div className="delete_btn">
            <span className="btn" onClick={() => decreaseOneItem(title)}>
              -
            </span>
          </div>

          <div className="quantity_number">
            <span>{quantity}</span>
          </div>

          <div className="add_btn">
            <span className="btn" onClick={() => addToCart(title)}>
              +
            </span>
          </div>
        </div>

        <div className="remove_product_btn">
          <span onClick={() => deleteProduct(title)}>
            <IoClose />
          </span>
        </div>
      </div>
    </>
  );
}
