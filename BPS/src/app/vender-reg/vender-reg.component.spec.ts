import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderRegComponent } from './vender-reg.component';

describe('VenderRegComponent', () => {
  let component: VenderRegComponent;
  let fixture: ComponentFixture<VenderRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
