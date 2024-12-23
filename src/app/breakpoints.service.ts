import {inject, Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
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
  constructor() { }
}
