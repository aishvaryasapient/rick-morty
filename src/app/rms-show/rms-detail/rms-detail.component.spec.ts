import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsDetailComponent } from './rms-detail.component';

describe('RmsDetailComponent', () => {
  let component: RmsDetailComponent;
  let fixture: ComponentFixture<RmsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
