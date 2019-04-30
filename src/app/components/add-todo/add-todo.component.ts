import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit() {
  }
    onSubmit() {
      //lets build the todo. like most back ends, it sets up the ID for you. 
      const todo = {
        title: this.title,
        completed:false
      }
this.addTodo.emit(todo);
    
  }

}
