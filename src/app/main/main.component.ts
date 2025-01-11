import {Component, inject, QueryList, ViewChildren} from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { AsyncPipe, NgClass } from '@angular/common';
import { BreakpointsService } from '../../service/breakpoints.service';
import { Observable } from 'rxjs';
import { TascConteiner } from '../../interfaces/tasc-conteiner';
import { TascContainerComponent } from '../tasc-container/tasc-container.component';

@Component({
  selector: 'app-main',
  imports: [
    MatCard,
    MatCardContent,
    NgClass,
    AsyncPipe,
    TascContainerComponent,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {
  @ViewChildren(TascContainerComponent) tascContainers!: QueryList<TascContainerComponent>;
  breakpointService: BreakpointsService = inject(BreakpointsService);
  isSmall$: Observable<boolean> = this.breakpointService.isSmall$;
  isXSmall$: Observable<boolean> = this.breakpointService.isXSmall$;
  public TascContainerList: Array<TascConteiner> = [
    { title: 'To do' },
    { title: 'In progress' },
    { title: 'Frozen' },
    { title: 'Closed' },
  ];

  public searchTerm: string = '';

  public onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.tascContainers.forEach(container => {
      container.searchTerm = searchTerm;
    });
  }

}
