import axios from 'axios';
import type { ProductType } from '../types/productType';

// axios queries
interface Props {
  search: string;
}

export const fetchProducts = async ({ search }: Props) => {
  const limit: number = 10;
  const { data } = await axios.get<{ products: ProductType[] }>(
    'https://dummyjson.com/products/search',
    {
      params: {
        q: search,
        limit,
      },
    },
  );
  return data;
};
