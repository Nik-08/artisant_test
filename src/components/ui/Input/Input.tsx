import { FC, HTMLAttributes, InputHTMLAttributes } from 'react';
import css from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
export const Input: FC<Props> = (props) => {
  return (
    <div className={css.main__toggle}>
      <span>All</span>
      <input type="checkbox" className={css.main__button} {...props} />
      <span>Available</span>
    </div>
  );
};
