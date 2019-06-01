import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserFilterComponent } from './user-filter.component';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';

describe('UserFilterComponent', () => {
  let component: UserFilterComponent;
  let fixture: ComponentFixture<UserFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFilterComponent ],
      imports: [ FormsModule, RouterTestingModule ]
    })
    .compileComponents()
    .catch(err => throwError(new Error(err)));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
