import { Injectable } from '@angular/core';
import {SidenavItem} from './navigation-drawer/sidenav-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  SidenavUrl = 'http://localhost:3000/sidenav';
  ContentUrl = 'http://localhost:3000/sidenav-content';
  async getSidenavItems(): Promise<SidenavItem[]> {
    const data = await fetch(this.SidenavUrl);
    return await data.json() ?? [];
  }
  async getContentItems(): Promise<SidenavItem[]> {
    const data = await fetch(this.ContentUrl);
    return await data.json() ?? [];
  }
  constructor() { }
}
