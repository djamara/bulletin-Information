import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecovidComponent } from './tablecovid.component';

describe('TablecovidComponent', () => {
  let component: TablecovidComponent;
  let fixture: ComponentFixture<TablecovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablecovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
