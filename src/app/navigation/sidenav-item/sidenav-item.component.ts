import {Component, input, Input} from '@angular/core';
import {MatListItem} from "@angular/material/list";
import {MatIcon} from '@angular/material/icon';
import {SidenavItem} from '../../../interfaces/sidenav-item';

@Component({
  selector: 'app-sidenav-item',
  imports: [
    MatListItem,
    MatIcon
  ],
  templateUrl: './sidenav-item.component.html',
})
export class SidenavItemComponent {
  data = input<SidenavItem>();
}
