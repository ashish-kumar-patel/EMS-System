import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboadComponent } from './admindashboad.component';

describe('AdmindashboadComponent', () => {
  let component: AdmindashboadComponent;
  let fixture: ComponentFixture<AdmindashboadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindashboadComponent]
    });
    fixture = TestBed.createComponent(AdmindashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
