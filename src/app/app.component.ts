import { Component } from '@angular/core';

const todos = [
  // {
  //   id: 1,
  //   title: 'eating',
  //   done: true
  // },
  // {
  //   id: 2,
  //   title: 'drinking',
  //   done: true
  // },
  // {
  //   id: 3,
  //   title: 'laughing',
  //   done: true
  // }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: {
    id: number;
    title: string;
    done: boolean
  }[] = todos;
  addTodo(): void {
    console.log('dsaf');
  }
}
