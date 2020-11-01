import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarousselComponent } from './image-caroussel.component';

describe('ImageCarousselComponent', () => {
  let component: ImageCarousselComponent;
  let fixture: ComponentFixture<ImageCarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCarousselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
