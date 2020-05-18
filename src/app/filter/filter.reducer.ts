import { on, createReducer } from '@ngrx/store';
import * as actions from './filter.actions';
import { validFilters } from './filter.actions';

export const initialState:validFilters = 'all';

const _filterReducer = createReducer(initialState,
  on(actions.setFilter, (state, { filter }) => filter )
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}