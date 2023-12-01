import http from "@/utils/http";
import useSWR from "swr";
import { stats } from "webpack.config";

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

export interface BrandInfo {
  id: number;
  name: string;
  representativeName: string;
  intro: string;
  imageUuidName: string;
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

export interface ProductList {
  [key: string]: ProductItem[];
}
