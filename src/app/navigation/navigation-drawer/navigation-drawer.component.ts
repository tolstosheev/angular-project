import {Component, inject, ViewChild} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {AsyncPipe, NgClass, NgForOf} from '@angular/common';
import {SidenavItem} from './sidenav-item';
import {SidenavItemComponent} from '../sidenav-item/sidenav-item.component';
import {SidenavContentItemComponent} from '../sidenav-content-item/sidenav-content-item.component';
import {ContentComponent} from '../../content/content.component';
import {BreakpointsService} from '../../../service/breakpoints.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    SidenavItemComponent,
    SidenavContentItemComponent,
    ContentComponent,
    NgForOf,
    NgClass,
  ]
})
export class NavigationDrawerComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  breakpointService: BreakpointsService= inject(BreakpointsService);
  sidenavList: SidenavItem[] = [
    {icon: 'computer', name: 'Projects'},
    {icon: 'bookmarks', name: 'Task manager'},
    {icon: 'inbox', name: 'Inbox'},
    {icon: 'contacts', name: 'Contacts'},

  ];
  isLarge$: Observable<boolean> = this.breakpointService.isLarge$;
  isSmall$: Observable<boolean> = this.breakpointService.isSmall$;
  isXSmall$: Observable<boolean> = this.breakpointService.isXSmall$;

}
