import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesboxComponent } from './imagesbox.component';

describe('ImagesboxComponent', () => {
  let component: ImagesboxComponent;
  let fixture: ComponentFixture<ImagesboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
