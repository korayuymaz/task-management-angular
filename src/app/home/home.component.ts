import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Task } from "../task";
import { TasksService } from "../tasks.service";
import { TaskComponent } from "../task/task.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterModule, TaskComponent, CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  taskList: Task[] = [];
  tasksService: TasksService = inject(TasksService);
  constructor() {
    this.tasksService.getAllTasks().then((tasks: Task[]) => {
      this.taskList = tasks;
    });
  }
}
