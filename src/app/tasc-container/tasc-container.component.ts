import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-tasc-container',
  imports: [
    MatCardModule,
    MatCardHeader,
    MatIcon,
    MatIconButton,
    MatCardContent
  ],
  templateUrl: './tasc-container.component.html',
})
export class TascContainerComponent {
 @Input() title: string = '';
}
