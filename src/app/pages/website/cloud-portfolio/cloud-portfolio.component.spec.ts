import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudPortfolioComponent } from './cloud-portfolio.component';

describe('CloudPortfolioComponent', () => {
  let component: CloudPortfolioComponent;
  let fixture: ComponentFixture<CloudPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
