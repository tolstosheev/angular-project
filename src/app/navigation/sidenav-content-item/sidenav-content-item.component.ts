import {Component, input, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {SidenavItem} from '../../../interfaces/sidenav-item';

@Component({
  selector: 'app-sidenav-content-item',
    imports: [
        MatIcon,
        MatIconButton
    ],
  templateUrl: './sidenav-content-item.component.html'
})
export class SidenavContentItemComponent {
  data = input<SidenavItem>();
}
