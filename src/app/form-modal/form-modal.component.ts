import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TasksService } from "../tasks.service";
@Component({
  selector: "app-form-modal",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./form-modal.component.html",
  styleUrl: "./form-modal.component.css",
})
export class FormModalComponent {
  showTaskForm: boolean = false;
  applyForm = new FormGroup({
    title: new FormControl(""),
    category: new FormControl(""),
    completed: new FormControl(false),
  });
  tasksService: TasksService = inject(TasksService);
  openTaskForm() {
    this.showTaskForm = true;
  }

  closeTaskForm() {
    this.showTaskForm = false;
  }

  submitApplication() {
    this.tasksService.submitNewTask(
      this.applyForm.value.title ?? "",
      this.applyForm.value.category ?? "",
      this.applyForm.value.completed ?? false
    );
  }
}
