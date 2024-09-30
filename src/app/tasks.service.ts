import { Injectable } from "@angular/core";
import { Task } from "./task";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  url = "http://127.0.0.1:3000/tasks";

  async getAllTasks(): Promise<Task[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getTaskById(id: number): Promise<Task | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
