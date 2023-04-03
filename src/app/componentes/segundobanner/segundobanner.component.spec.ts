import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundobannerComponent } from './segundobanner.component';

describe('SegundobannerComponent', () => {
  let component: SegundobannerComponent;
  let fixture: ComponentFixture<SegundobannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundobannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
