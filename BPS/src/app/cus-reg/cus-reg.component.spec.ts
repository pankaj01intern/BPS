import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusRegComponent } from './cus-reg.component';

describe('CusRegComponent', () => {
  let component: CusRegComponent;
  let fixture: ComponentFixture<CusRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
