import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  currFilter:actions.validFilters = 'all';
  filters:actions.validFilters[] = ['all', 'completed', 'active'];

  todos:number = 0;

  constructor(private store:Store<AppState> ) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe( filter => this.currFilter = filter )
    this.store.subscribe( state => {
      this.currFilter = state.filter;
      this.todos = state.todos.filter( todo => !todo.completed).length;
    })
  }

  changeFilter( filter ) {
    this.store.dispatch(actions.setFilter({ filter: filter }))
  }

  deleteCompleted(){
    this.store.dispatch(actions.deleteCompleted())
  }
}
