import axios from 'axios';
import type { ProductType } from '../../types/productType';
import { useEffect, useState } from 'react';
export const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<ProductType[]>(
        'https://dummyjson.com/products',
      );
      setProducts({ ...data });
    };
    fetchData();
  }, []);
  console.log(products);
  return <></>;
};
