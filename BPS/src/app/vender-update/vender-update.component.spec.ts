import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderUpdateComponent } from './vender-update.component';

describe('VenderUpdateComponent', () => {
  let component: VenderUpdateComponent;
  let fixture: ComponentFixture<VenderUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
