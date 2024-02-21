import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourChildOneComponent } from './behaviour-child-one.component';

describe('BehaviourChildOneComponent', () => {
  let component: BehaviourChildOneComponent;
  let fixture: ComponentFixture<BehaviourChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourChildOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviourChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
