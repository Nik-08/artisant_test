import React from 'react';
import { CardListItem } from '../CardListItem';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from 'store/product';
import css from './styles.module.scss';
import { Spinner } from '../ui';

export const CardList = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  const { items, loading, filter } = useSelector((state: AppState) => ({
    items: selectors.getItems(state),
    loading: selectors.loading(state),
    filter: selectors.filter(state),
  }));

  return (
    <div className={css.main__list}>
      {loading ? (
        <Spinner />
      ) : (
        items.map((item) => [<CardListItem key={item.product_id} {...item} />])
      )}
    </div>
  );
};
