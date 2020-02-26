import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsListComponent } from './rms-list.component';

describe('RmsListComponent', () => {
  let component: RmsListComponent;
  let fixture: ComponentFixture<RmsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
