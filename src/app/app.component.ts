import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],
  template: `
    <main>
      <header>
        <h2>Task List</h2>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "task-management";
}
