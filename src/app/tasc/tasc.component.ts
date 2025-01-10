import {Component, input, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {TaskItem} from '../../interfaces/task-item';

@Component({
  selector: 'app-tasc',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButton,
  ],
  templateUrl: './tasc.component.html',
})
export class TascComponent {
  data = input<TaskItem>();

}
