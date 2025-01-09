import {Component, inject} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {AsyncPipe, NgStyle} from '@angular/common';
import {BreakpointsService} from '../../service/breakpoints.service';
import {HeaderComponent} from '../header/header.component';
import {map} from 'rxjs/operators';
import {MainComponent} from '../main/main.component';

@Component({
  selector: 'app-content',
  imports: [
    NgStyle,
    AsyncPipe,
    HeaderComponent,
    MainComponent
  ],
  templateUrl: './content.component.html',
})
export class ContentComponent {
  breakpointService: BreakpointsService= inject(BreakpointsService);
  isSmall$: Observable<boolean> = this.breakpointService.isSmall$;
  isXSmall$: Observable<boolean> = this.breakpointService.isXSmall$;
  marginLeft$: Observable<string> = combineLatest([this.isSmall$, this.isXSmall$]).pipe(
    map(([isSmall, isXSmall]) => {
      if (isSmall) {
        return '100px';
      } else {
        return '0';
      }
    })
  );
}
