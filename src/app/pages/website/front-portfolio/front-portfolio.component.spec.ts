import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPortfolioComponent } from './front-portfolio.component';

describe('FrontPortfolioComponent', () => {
  let component: FrontPortfolioComponent;
  let fixture: ComponentFixture<FrontPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
