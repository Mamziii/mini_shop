import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductType } from "../types";

// get all Products function
const getAllProducts = async (): Promise<ProductType[]> => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

// products query
export function useFetchAllProduts() {
  const productsQuery = useQuery<ProductType[]>({
    queryKey: ["Products"],
    queryFn: getAllProducts,
  });

  return { ...productsQuery };
}
