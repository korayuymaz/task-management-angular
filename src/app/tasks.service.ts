import { Injectable } from "@angular/core";
import { Task } from "./task";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  url = "http://127.0.0.1:3000/tasks";
  constructor(private http: HttpClient) {}
  async getAllTasks(): Promise<Task[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getTaskById(id: number): Promise<Task | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  changeTaskStatus(id: number, newTask: Task) {
    let newUrl = this.url + `/${id}`;
    this.http.put<Task>(newUrl, newTask).subscribe((data) => {
      console.log("new data", data);
    });
  }

  submitNewTask(title: string, category: string, completed: boolean) {
    console.log(title, category, completed);
  }
}
