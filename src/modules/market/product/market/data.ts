import useSWR from "swr";
import { ProductItem } from "./Products";

export function useCart() {
  const { data: carts, mutate: setCart } = useSWR<ProductItem[]>(
    "@state/carts",
    {
      fallbackData: [],
    }
  );

  return { carts, setCart };
}
