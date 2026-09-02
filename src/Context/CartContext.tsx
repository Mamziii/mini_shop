import { createContext, useState, useEffect, useContext } from "react";
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
  removeFromCart: (title: string) => void;
  deleteAll: () => void;
};

export const cartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const navigate = useNavigate();
  const { data: allProducts } = useFetchAllProduts();
  const [cart, setCart] = useState<ProductType[]>([]);

  //   add product to cart
  const addToCart = (title: string) => {
    setCart((prevProducts) => {
      const mainProductInCart = cart.find((product) => product.title === title);

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

    swal({
      title: `${title.slice(0, 13)}... added to cart successfully`,
      icon: "success",
      buttons: ["Ok", "Go To Cart"],
    }).then((result) => {
      if (result) {
        navigate("/cart");
      }
    });
  };
};
