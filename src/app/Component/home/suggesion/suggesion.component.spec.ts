import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggesionComponent } from './suggesion.component';

describe('SuggesionComponent', () => {
  let component: SuggesionComponent;
  let fixture: ComponentFixture<SuggesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
