import { FC, ChangeEventHandler, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../ui';
import css from './styles.module.scss';
import { actions } from 'store/product';

export const Layout: FC = ({ children }) => {
  const dispatch = useDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const checked = e.target.checked;
      const filter: ProductFilter = checked ? 'available' : 'all';

      dispatch(actions.setFilter(filter));
    },
    [dispatch]
  );

  return (
    <div className={css.main}>
      <div className={css.main__container}>
        <h1 className={css.main__titel}>Explore</h1>
        <h2 className={css.main__subtitel}>
          Buy and sell digital fashion NFT art
        </h2>
        <Input onChange={onChange} />
        {children}
      </div>
    </div>
  );
};
