import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAngularComponent } from './default-angular.component';

describe('DefaultAngularComponent', () => {
  let component: DefaultAngularComponent;
  let fixture: ComponentFixture<DefaultAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultAngularComponent]
    });
    fixture = TestBed.createComponent(DefaultAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
