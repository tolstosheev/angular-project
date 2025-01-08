import {Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {AsyncPipe, NgStyle} from '@angular/common';
import {BreakpointsService} from '../../service/breakpoints.service';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-content',
  imports: [
    NgStyle,
    AsyncPipe,
    HeaderComponent
  ],
  templateUrl: './content.component.html',
})
export class ContentComponent {
  breakpointService: BreakpointsService= inject(BreakpointsService);
  isSmall$: Observable<boolean> = this.breakpointService.isSmall$;
  isXSmall$: Observable<boolean> = this.breakpointService.isXSmall$;
}
