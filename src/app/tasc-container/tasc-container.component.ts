import { Component, input, Input, SimpleChanges } from '@angular/core';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { TascComponent } from '../tasc/tasc.component';
import { TaskDataSource } from '../data-sources/task.data-source';
import { TascConteiner } from '../../interfaces/tasc-conteiner';
import { AsyncPipe } from '@angular/common';
import { TaskItem } from '../../interfaces/task-item';
import { FilterTasksPipe } from '../filter-tasks.pipe';

@Component({
  selector: 'app-tasc-container',
  imports: [
    MatCardModule,
    MatCardHeader,
    MatIcon,
    MatIconButton,
    MatCardContent,
    TascComponent,
    AsyncPipe,
    FilterTasksPipe,
  ],
  templateUrl: './tasc-container.component.html',
})
export class TascContainerComponent {
  data = input<TascConteiner>();
  @Input() searchTerm: string = ''; // Принимаем поисковый запрос

  public dataSource = new TaskDataSource();

  public addTask(): void {
    const newTask: TaskItem = {
      title: 'New Task', // Заголовок новой задачи
      level: 'Low', // Уровень задачи
      participant: 'User', // Участник
      date: new Date().toISOString().split('T')[0], // Дата добавления
      containerTitle: this.data()?.title || '', // Контейнер, в который добавляется задача
    };

    this.dataSource.addTask(newTask); // Добавляем задачу в текущий контейнер
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      this.dataSource.search(this.searchTerm);
    }
  }
}
