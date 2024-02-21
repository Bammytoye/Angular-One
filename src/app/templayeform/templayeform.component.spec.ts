import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplayeformComponent } from './templayeform.component';

describe('TemplayeformComponent', () => {
  let component: TemplayeformComponent;
  let fixture: ComponentFixture<TemplayeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplayeformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplayeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
