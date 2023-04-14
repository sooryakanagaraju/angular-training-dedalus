import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpnoteComponent } from './helpnote.component';

describe('HelpnoteComponent', () => {
  let component: HelpnoteComponent;
  let fixture: ComponentFixture<HelpnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
