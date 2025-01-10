import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {

  private drawerSubject = new BehaviorSubject<MatSidenav | null>(null);
  drawer$ = this.drawerSubject.asObservable();

  // Метод для установки ссылки на MatSidenav
  public setSidenav(drawer: MatSidenav) {
    this.drawerSubject.next(drawer);
  }

  // Метод для переключения состояния MatSidenav
  public toggle(): void {
    const drawer = this.drawerSubject.getValue();
    if (drawer) {
      drawer.toggle();
    } else {
      console.error('MatSidenav is not initialized');
    }
  }
}
