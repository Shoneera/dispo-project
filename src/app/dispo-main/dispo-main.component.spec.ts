import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispoMainComponent } from './dispo-main.component';

describe('DispoMainComponent', () => {
  let component: DispoMainComponent;
  let fixture: ComponentFixture<DispoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispoMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
