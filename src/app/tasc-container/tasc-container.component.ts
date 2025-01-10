import {Component, input, Input} from '@angular/core';
import { MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {TascComponent} from '../tasc/tasc.component';
import {TascConteiner} from '../../interfaces/tasc-conteiner';
import {TaskItem} from '../../interfaces/task-item';

@Component({
  selector: 'app-tasc-container',
  imports: [
    MatCardModule,
    MatCardHeader,
    MatIcon,
    MatIconButton,
    MatCardContent,
    TascComponent,
  ],
  templateUrl: './tasc-container.component.html',
})
export class TascContainerComponent {
 data = input<TascConteiner>();
 public tascList: Array<TaskItem> = [
   {
     title: 'title',
     level: 'level',
     participant: 'participant',
     date: 'date'
   },
   {
     title: 'title',
     level: 'level',
     participant: 'participant',
     date: 'date'
   }
 ]
}
