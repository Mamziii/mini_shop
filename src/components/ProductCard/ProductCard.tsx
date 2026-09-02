import "./ProductCard.css";
import { ProductType } from "../../types";
import { useCart } from "../../Context/CartContext";

export default function ProductCard({ image, title, price }: ProductType) {
  const { addToCart } = useCart();

  return (
    <>
      <div className="card">
        <div className="image">
          <img src={image} alt={title} />
        </div>

        <div className="details">
          <span style={{ fontWeight: "bold" }}>{title.slice(0, 19)}...</span>
          <span style={{ fontWeight: "bold" }}>price : {price}$</span>
          <span onClick={() => addToCart(title)}>add to cart</span>
        </div>
      </div>
    </>
  );
}
