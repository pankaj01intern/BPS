import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusUpdateComponent } from './cus-update.component';

describe('CusUpdateComponent', () => {
  let component: CusUpdateComponent;
  let fixture: ComponentFixture<CusUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
