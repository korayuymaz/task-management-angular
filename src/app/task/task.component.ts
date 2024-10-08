import { Component, inject, Input } from "@angular/core";
import { Task } from "../task";
import { TasksService } from "../tasks.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-task",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent {
  @Input() task!: Task;
  taskService = inject(TasksService);

  handleTaskStatusChange() {
    let newTask = this.task;
    newTask.completed = !this.task.completed;
    this.taskService.changeTaskStatus(this.task.id, newTask);
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}
