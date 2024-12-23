import {Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {AsyncPipe, NgStyle} from '@angular/common';
import {BreakpointsService} from '../breakpoints.service';

@Component({
  selector: 'app-content',
  imports: [
    NgStyle,
    AsyncPipe
  ],
  templateUrl: './content.component.html',
})
export class ContentComponent {
  breakpointService: BreakpointsService= inject(BreakpointsService);
  isSmall$: Observable<boolean> = this.breakpointService.isSmall$;
  isXSmall$: Observable<boolean> = this.breakpointService.isXSmall$;
}
