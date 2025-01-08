import {Component, Input} from '@angular/core';
import {MatListItem} from "@angular/material/list";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-sidenav-item',
  imports: [
    MatListItem,
    MatIcon
  ],
  templateUrl: './sidenav-item.component.html',
})
export class SidenavItemComponent {
  @Input() icon: string = '';
  @Input() name: string = '';
}
