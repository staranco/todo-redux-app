import { createAction, props } from '@ngrx/store'

export type validFilters = 'all' | 'completed' | 'active';

export const setFilter = createAction(
    '[TODO] Set Filter', 
    props<{ filter:validFilters }>() 
);

export const deleteCompleted = createAction('[TODO] Delete Completed');