import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPhotosComponentComponent } from './upload-photos-component.component';

describe('UploadPhotosComponentComponent', () => {
  let component: UploadPhotosComponentComponent;
  let fixture: ComponentFixture<UploadPhotosComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPhotosComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPhotosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
