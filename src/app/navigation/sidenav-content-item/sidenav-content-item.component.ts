import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-sidenav-content-item',
    imports: [
        MatIcon,
        MatIconButton
    ],
  templateUrl: './sidenav-content-item.component.html'
})
export class SidenavContentItemComponent {
  @Input() icon: string = '';
  @Input() name: string = '';
}
