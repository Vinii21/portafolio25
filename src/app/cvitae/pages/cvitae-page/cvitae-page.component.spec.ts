import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvitaePageComponent } from './cvitae-page.component';

describe('CvitaePageComponent', () => {
  let component: CvitaePageComponent;
  let fixture: ComponentFixture<CvitaePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvitaePageComponent]
    });
    fixture = TestBed.createComponent(CvitaePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
