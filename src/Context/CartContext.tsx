import { createContext, useState, useContext } from "react";
import swal from "sweetalert";
import { ProductType } from "../types";
import { useNavigate } from "react-router-dom";
import { useFetchAllProduts } from "../Hooks/useFetchAllProducts";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  cart: ProductType[];
  addToCart: (title: string) => void;
  deleteProduct: (title: string) => void;
  decreaseOneItem: (title: string) => void;
};

export const CartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const navigate = useNavigate();
  const { data: allProducts } = useFetchAllProduts();
  const [cart, setCart] = useState<ProductType[]>([]);

  //   add product to cart
  const addToCart = (title: string) => {
    const isAlreadyInCart = cart.some((product) => product.title === title);

    setCart((prevProducts) => {
      const mainProductInCart = prevProducts.find(
        (product) => product.title === title,
      );

      if (mainProductInCart) {
        return prevProducts.map((product) => {
          if (product.title === title) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      } else {
        const mainProductInShop = allProducts?.find(
          (product) => product.title === title,
        ) as ProductType;

        return [...prevProducts, { ...mainProductInShop, quantity: 1 }];
      }
    });

    if (!isAlreadyInCart) {
      swal({
        title: `${title.slice(0, 13)}... added to cart successfully`,
        icon: "success",
        buttons: ["Ok", "Go To Cart"],
      }).then((result) => {
        if (result) {
          navigate("/cart");
        }
      });
    }
  };

  // decrease one item
  const decreaseOneItem = (title: string) => {
    setCart((prevProducts) =>
      prevProducts.map((product) => {
        if (product.title === title && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      }),
    );
  };

  // delete from cart
  const deleteProduct = (title: string) => {
    setCart((prevProducts) =>
      prevProducts.filter((product) => product.title !== title),
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteProduct, decreaseOneItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCart = () => {
  const contxt = useContext(CartContext);
  if (!contxt) throw new Error("usecart must be used whit in cartProvider");
  return contxt;
};
