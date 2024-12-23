import {Component, Input} from '@angular/core';
import {MatListItem} from "@angular/material/list";
import {SidenavItem} from '../navigation-drawer/sidenav-item';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-sidenav-item',
  imports: [
    MatListItem,
    MatIcon
  ],
  templateUrl: './sidenav-item.component.html',
  styleUrl: './sidenav-item.component.scss'
})
export class SidenavItemComponent {
  @Input() sidenavList!: SidenavItem;
}
