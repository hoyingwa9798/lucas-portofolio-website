import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPortfolioComponent } from './data-portfolio.component';

describe('DataPortfolioComponent', () => {
  let component: DataPortfolioComponent;
  let fixture: ComponentFixture<DataPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
