import { createSelector, Selector } from 'reselect';

export const state: Selector<AppState, AppState['product']> = ($state) =>
  $state.product;

export const loading = createSelector([state], ($state) => $state.loading);

export const items = createSelector([state], ($state) => $state.items);

export const error = createSelector([state], ($state) => $state.error);

export const filter = createSelector([state], ($state) => $state.filter);

export const getItems = createSelector([items, filter], ($items, $filter) => {
  if ($filter === 'all') return $items;

  return $items.filter((item) => item.quantity_available > 0);
});
