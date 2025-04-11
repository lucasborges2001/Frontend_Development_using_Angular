import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule, TaskItemComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tasks: string[] = ['Tarea de ejemplo 1', 'Tarea de ejemplo 2'];
    newTask: string = '';
    completedTask: string | null = null;

    addTask() {
        if (this.newTask.trim()) {
            this.tasks.push(this.newTask.trim());
            this.newTask = '';
        }
    }

    toggleComplete(task: string) {
        this.completedTask = this.completedTask === task ? null : task;
    }
}