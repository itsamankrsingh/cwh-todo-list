import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] | undefined;

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This is Title 1',
        desc: 'This is description 1',
        active: true,
      },
      {
        sno: 2,
        title: 'This is Title 2',
        desc: 'This is description 2',
        active: true,
      },
      {
        sno: 3,
        title: 'This is Title 3',
        desc: 'This is description 3',
        active: false,
      },
      {
        sno: 4,
        title: 'This is Title 4',
        desc: 'This is description 4',
        active: false,
      },
      {
        sno: 5,
        title: 'This is Title 5',
        desc: 'This is description 5',
        active: true,
      },
    ];
  }
}
