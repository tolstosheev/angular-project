import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {AsyncPipe, NgClass, NgForOf} from '@angular/common';
import {BreakpointsService} from '../../service/breakpoints.service';
import {Observable} from 'rxjs';
import {SidenavItem} from '../navigation/navigation-drawer/sidenav-item';
import {TascConteiner} from './tasc-conteiner';
import {TascContainerComponent} from '../tasc-container/tasc-container.component';
import {SidenavContentItemComponent} from '../navigation/sidenav-content-item/sidenav-content-item.component';

@Component({
  selector: 'app-main',
  imports: [
    MatCard,
    MatCardContent,
    NgClass,
    AsyncPipe,
    TascContainerComponent,
    NgForOf,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {
  breakpointService: BreakpointsService= inject(BreakpointsService);
  isSmall$: Observable<boolean> = this.breakpointService.isSmall$;
  isXSmall$: Observable<boolean> = this.breakpointService.isXSmall$;
  TascContainerList: TascConteiner[] = [
    {title: 'To do'},
    {title: 'In progress'},
    {title: 'Frozen'},
    {title: 'Closed'},
  ];
}
