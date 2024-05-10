import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPortfolioComponent } from './back-portfolio.component';

describe('BackPortfolioComponent', () => {
  let component: BackPortfolioComponent;
  let fixture: ComponentFixture<BackPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
