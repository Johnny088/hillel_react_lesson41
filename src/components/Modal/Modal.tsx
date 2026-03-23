import { useEffect } from 'react';
import type { ProductType } from '../../types/productType';
import css from './Modal.module.css';
interface Props {
  product: ProductType;
  onClose: () => void;
}
export const Modal = ({ product, onClose }: Props) => {
  const onCloseTest = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log('target');
    // console.log(e.target);
    // console.log(`current target`);
    // console.log(e.currentTarget);
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  useEffect(() => {
    const handlerKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handlerKeyDown);
    return () => {
      document.removeEventListener('keydown', handlerKeyDown);
    };
  }, [onClose]);
  return (
    <div id="backdrop" onClick={onCloseTest} className={css.backdrop}>
      <div id="modal" className={css.modal}>
        <button onClick={onClose} className={css.closeBtn}>
          close
        </button>
        <img src={product.images[0]} alt="photo" className={css.image} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};
