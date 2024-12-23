import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {SidenavItem} from '../navigation-drawer/sidenav-item';

@Component({
  selector: 'app-sidenav-content-item',
    imports: [
        MatIcon,
        MatIconButton
    ],
  templateUrl: './sidenav-content-item.component.html',
  styleUrl: './sidenav-content-item.component.scss'
})
export class SidenavContentItemComponent {
  @Input() contentList!: SidenavItem;
}
