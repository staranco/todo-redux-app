import { on, createReducer } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState:Todo[] = [
    new Todo('Hack Whiterose'),
    new Todo('Call Darlene'),
    new Todo('Meet Angela')
];

const _todoReducer = createReducer(initialState,
  on(actions.create, (state, { text }) => [...state, new Todo( text ) ]),
  on(actions.erase, (state, { id }) => state.filter( todo => todo.id != id )),
  on(actions.deleteCompleted, state => state.filter( todo => !todo.completed )),
  on(actions.toggle, (state, { id }) => {
    return state.map( todo => {

      if( todo.id === id ){
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
      
    })
  }),
  on(actions.toggleAll, (state, { completed }) => {
    return state.map( todo => {
      return {
        ...todo,
        completed: completed
      } 
    })
  }),
  on(actions.edit, (state, { id, text }) => {
    return state.map( todo => {

      if( todo.id === id ){
        return {
          ...todo,
          text: text
        }
      } else {
        return todo
      }
      
    })
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}