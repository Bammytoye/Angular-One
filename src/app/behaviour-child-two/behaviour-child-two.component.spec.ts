import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourChildTwoComponent } from './behaviour-child-two.component';

describe('BehaviourChildTwoComponent', () => {
  let component: BehaviourChildTwoComponent;
  let fixture: ComponentFixture<BehaviourChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourChildTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviourChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
