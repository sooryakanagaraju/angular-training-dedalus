import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonContainerComponent } from './botton-container.component';

describe('BottonContainerComponent', () => {
  let component: BottonContainerComponent;
  let fixture: ComponentFixture<BottonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
