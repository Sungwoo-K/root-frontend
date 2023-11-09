import useSWR from "swr";

export function useCart() {
  const { data: carts, mutate: setCart } = useSWR<ProductItem[]>(
    "@state/carts",
    {
      fallbackData: [],
    }
  );

  return { carts, setCart };
}

export interface PaginationResponse<T> {
  content: T[];
  last: boolean;
}

export interface ProductItem {
  id: number;
  productBrand: string;
  productName: string;
  productPrice: number;
  category: string;
  productDescription: string;
  isActive: boolean;
  maximumPurchaseQuantity: number;
  discountRate: number;
  mainImageUuidName: string;
}

export type productList = Array<Map<string, Array<ProductItem>>>;
