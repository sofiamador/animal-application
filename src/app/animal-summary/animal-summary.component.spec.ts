import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSummaryComponent } from './animal-summary.component';

describe('AnimalSummaryComponent', () => {
  let component: AnimalSummaryComponent;
  let fixture: ComponentFixture<AnimalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
