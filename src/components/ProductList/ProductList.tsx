import type { ProductType } from '../../types/productType';
interface Props {
  products: ProductType[];
}
export const ProductList = ({ products }: Props) => {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          <p>{p.title}</p>
        </li>
      ))}
    </ul>
  );
};
