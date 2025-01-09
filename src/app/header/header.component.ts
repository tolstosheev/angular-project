import {Component, inject} from '@angular/core';
import {MatFormField, MatPrefix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from '@angular/material/input';
import {MatIconButton} from '@angular/material/button';
import {BreakpointsService} from '../../service/breakpoints.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {Observable} from 'rxjs';
import {AsyncPipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MatFormField,
    MatIcon,
    MatInput,
    MatIconButton,
    MatPrefix,
    AsyncPipe,
    NgClass,
    MatSidenavModule
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  breakpointService: BreakpointsService= inject(BreakpointsService);
  isSmall$: Observable<boolean> = this.breakpointService.isSmall$;
  isXSmall$: Observable<boolean> = this.breakpointService.isXSmall$;

}
