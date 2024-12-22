import {Component, inject} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrl: './navigation-drawer.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
  ]
})
export class NavigationDrawerComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isLarge$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XLarge, Breakpoints.Large])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isSmall$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Small])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isXSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
