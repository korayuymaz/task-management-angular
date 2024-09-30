import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/favicon.ico"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
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
