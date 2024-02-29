// header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  taskName: string = '';

  @Output() taskAdded: EventEmitter<any> = new EventEmitter<any>();

  addTask(): void {
    if (this.taskName.trim() !== '') {
      const taskData = {
        name: this.taskName,
        creator: 'Esraa', 
        creationDate: new Date(),
        completed: false
      };
      this.taskAdded.emit(taskData);
      this.taskName = ''; 
    }
  }
}
