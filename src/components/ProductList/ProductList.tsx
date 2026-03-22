import type { ProductType } from '../../types/productType';
import { ProductCard } from '../ProductCard/ProductCard';
import css from './ProductList.module.css';
interface Props {
  products: ProductType[];
  onClickHandler: (product: ProductType) => void;
}
export const ProductList = ({ products, onClickHandler }: Props) => {
  const reviewHandler = () => {};
  return (
    <ul className={css.container}>
      {products.map(product => (
        <li onClick={reviewHandler} key={product.id} className={css.cardBox}>
          <ProductCard item={product} onClickHandler={onClickHandler} />
        </li>
      ))}
    </ul>
  );
};
