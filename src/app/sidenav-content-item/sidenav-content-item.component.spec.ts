import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavContentItemComponent } from './sidenav-content-item.component';

describe('SidenavContentItemComponent', () => {
  let component: SidenavContentItemComponent;
  let fixture: ComponentFixture<SidenavContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavContentItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
