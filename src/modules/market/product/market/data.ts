import useSWR from "swr";

export function useCart() {
  const { data: carts, mutate: setCart } = useSWR<number[]>("@state/carts", {
    fallbackData: [],
  });

  return { carts, setCart };
}
