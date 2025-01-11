import { Pipe, PipeTransform } from '@angular/core';
import { TaskItem } from '../interfaces/task-item';

@Pipe({
  name: 'filterTasks',
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: readonly TaskItem[] | null, containerTitle: string): readonly TaskItem[] {
    if (!tasks || !containerTitle) {
      return tasks || []; // Возвращаем пустой массив, если tasks равно null
    }
    return tasks.filter(task => task.containerTitle === containerTitle);
  }
}
