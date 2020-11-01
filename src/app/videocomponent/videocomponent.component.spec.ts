import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocomponentComponent } from './videocomponent.component';

describe('VideocomponentComponent', () => {
  let component: VideocomponentComponent;
  let fixture: ComponentFixture<VideocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
