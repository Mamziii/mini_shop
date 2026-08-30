import { createContext, useEffect, useState } from "react";
import { ProductType } from "../types";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useFetchAllProduts } from "../Hooks/useFetchAllProducts";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  allProducts: ProductType[];
  cart: ProductType[];
  addProductToCart: (title: string) => void;
  deleteProductFromCart: (title: string) => void;
  deleteAllProductsFromCart: () => void;
};

export const CartContext = createContext({} as CartContextType);

const ShopContextProvider = ({ children }: CartContextProviderProps) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<ProductType[]>([]);
  const { data: allProducts = [] } = useFetchAllProduts();
};
