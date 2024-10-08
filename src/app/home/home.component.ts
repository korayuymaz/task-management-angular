import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Task } from "../task";
import { TasksService } from "../tasks.service";
import { TaskComponent } from "../task/task.component";
import { CommonModule } from "@angular/common";
import { FormModalComponent } from "../form-modal/form-modal.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterModule, TaskComponent, CommonModule, FormModalComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  taskList: Task[] = [];
  tasksService: TasksService = inject(TasksService);

  constructor(private webSocketService: TasksService) {
    this.tasksService.getAllTasks().then((tasks: Task[]) => {
      this.taskList = tasks;
    });
  }

  ngOnInit() {
    this.webSocketService.getDataUpdates().subscribe((newData) => {
      this.taskList = newData;
    });
  }
}
