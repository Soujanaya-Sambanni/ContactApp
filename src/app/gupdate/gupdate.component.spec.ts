import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GupdateComponent } from './gupdate.component';

describe('GupdateComponent', () => {
  let component: GupdateComponent;
  let fixture: ComponentFixture<GupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
