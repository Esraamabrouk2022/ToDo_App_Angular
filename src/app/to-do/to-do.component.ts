// todo.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class TodoComponent {
  @Input() tasks: any[] = [];

  toggleEditMode(task: any): void {
    task.editMode = !task.editMode;
  }

  deleteTask(task: any): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  completeTask(task: any): void {
    task.completed = true;
  }
}
