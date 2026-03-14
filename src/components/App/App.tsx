import type { ProductType } from '../../types/productType';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/productsService';
import { ProductList } from '../ProductList/ProductList';
export const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState<string>('coco');
  useEffect(() => {
    const getProducts = async () => {
      const { products } = await fetchProducts({ search });
      setProducts(products);
    };
    getProducts();
  }, [search]);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
