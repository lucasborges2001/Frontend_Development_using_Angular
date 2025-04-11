import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, TaskItemComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'todo-app';
}