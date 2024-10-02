import { Component, inject, Input } from "@angular/core";
import { Task } from "../task";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-task",
  standalone: true,
  imports: [],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent {
  @Input() task!: Task;
  taskService = inject(TasksService);
  handleTaskStatusChange() {
    console.log(this.task.id, !this.task.completed);
  }
}
