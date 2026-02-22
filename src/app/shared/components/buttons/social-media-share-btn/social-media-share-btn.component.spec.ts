import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaShareBtnComponent } from './social-media-share-btn.component';

describe('SocialMediaShareBtnComponent', () => {
  let component: SocialMediaShareBtnComponent;
  let fixture: ComponentFixture<SocialMediaShareBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaShareBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaShareBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
