import type { ProductType } from '../../types/productType';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/productsService';
import { ProductList } from '../ProductList/ProductList';
import { SearchForm } from '../SearchForm/SearchForm';
export const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    const getProducts = async () => {
      const { products } = await fetchProducts({ search });
      setProducts(products);
    };
    getProducts();
  }, [search]);
  const searchQuery = (newQuery: string): void => {
    setSearch(newQuery);
  };
  return (
    <>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <h2>Nothing was found</h2>
      )}
      <SearchForm searchQuery={searchQuery} />
    </>
  );
};
