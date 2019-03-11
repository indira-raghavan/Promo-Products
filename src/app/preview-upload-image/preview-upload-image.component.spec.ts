import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewUploadImageComponent } from './preview-upload-image.component';

describe('PreviewUploadImageComponent', () => {
  let component: PreviewUploadImageComponent;
  let fixture: ComponentFixture<PreviewUploadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewUploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
