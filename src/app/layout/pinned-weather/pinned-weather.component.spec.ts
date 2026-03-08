import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedWeatherComponent } from './pinned-weather.component';

describe('PinnedWeatherComponent', () => {
  let component: PinnedWeatherComponent;
  let fixture: ComponentFixture<PinnedWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PinnedWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinnedWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
