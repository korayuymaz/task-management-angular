import { Injectable } from "@angular/core";
import { Task } from "./task";
import { HttpClient } from "@angular/common/http";
import { WebSocketSubject } from "rxjs/webSocket";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  private socket$: WebSocketSubject<any>;
  url = "http://127.0.0.1:3000/tasks";

  constructor(private http: HttpClient) {
    this.socket$ = new WebSocketSubject("127.0.0.1:3000");
  }

  getDataUpdates() {
    return this.socket$;
  }

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
    this.http
      .post<Task>(this.url, { title, category, completed })
      .subscribe((data) => {
        console.log("new data", data);
      });
  }

  deleteTask(id: number) {
    let newUrl = this.url + `/${id}`;
    this.http.delete<Task>(newUrl).subscribe((data) => {
      console.log("new data", data);
    });
  }
}
