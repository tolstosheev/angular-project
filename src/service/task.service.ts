import { Injectable } from '@angular/core';
import {TaskItem} from '../interfaces/task-item';
import {delay, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Array<TaskItem> = [
    { title: 'Task 1', level: 'Low', participant: 'Alice', date: '2023-10-01', containerTitle: 'To do' },
    { title: 'Task 2', level: 'Medium', participant: 'Bob', date: '2023-10-02', containerTitle: 'In progress' },
    { title: 'Task 3', level: 'High', participant: 'Charlie', date: '2023-10-03', containerTitle: 'Frozen' },
    { title: 'Task 4', level: 'Low', participant: 'David', date: '2023-10-04', containerTitle: 'Closed' },
  ];

  public getTasks(searchTerm: string): Observable<TaskItem[]> {
    return of(
      this.tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    )
      .pipe(delay(1000));
  }

  constructor() { }
}
