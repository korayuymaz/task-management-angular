import { CommonModule } from "@angular/common";
import { Component, Input, InputFunction, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-form-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./form-modal.component.html",
  styleUrl: "./form-modal.component.css",
})
export class FormModalComponent {
  showTaskForm: boolean = false;

  openTaskForm() {
    this.showTaskForm = true;
  }

  closeTaskForm() {
    this.showTaskForm = false;
  }
}
