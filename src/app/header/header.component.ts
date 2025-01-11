import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatFormField, MatPrefix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import { BreakpointsService } from '../../service/breakpoints.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import { SidenavService } from '../../service/sidenav.service';
import { FormsModule } from '@angular/forms';

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
    MatSidenavModule,
    FormsModule,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  breakpointService: BreakpointsService = inject(BreakpointsService);
  isLarge$: Observable<boolean> = this.breakpointService.isLarge$;
  isSmall$: Observable<boolean> = this.breakpointService.isSmall$;
  isXSmall$: Observable<boolean> = this.breakpointService.isXSmall$;

  searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private sidenavService: SidenavService) {}

  toggle() {
    this.sidenavService.toggle();
  }

  onSearch(): void {
    this.searchEvent.emit(this.searchTerm);
  }
}
