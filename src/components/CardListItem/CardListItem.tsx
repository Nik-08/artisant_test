import { FC } from 'react';
import css from './styles.module.scss';
import productImg from '../../assets/img/product.png';

export const CardListItem: FC<Product> = ({
  created_by,
  quantity_available,
  name,
  initial_price,
}) => {
  return (
    <div className={css.main__item}>
      <div className={css.card__body}>
        <div className={css.card__header}>
          <span className={css.card__creator}>created by</span>
          <span className={css.card__autor}>{created_by.display_name}</span>
        </div>
        <img src={productImg} alt="" className={css.card__img} />
        <div className={css.card__names}>
          <span className={css.card__name}>{name}</span>
        </div>
      </div>
      <div className={css.card__footer}>
        <div className={css.card__available}>
          <span className={css.availabe}>available</span>
          <span className={css.availabe__count}>
            {quantity_available} of 50
          </span>
        </div>
        <div className={css.card__prices}>
          <span className={css.card__price}>price</span>
          <span className={css.price}>{initial_price} ETH</span>
        </div>
      </div>
    </div>
  );
};
