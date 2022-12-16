import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMapsFormComponent } from './add-maps-form.component';

describe('AddMapsFormComponent', () => {
  let component: AddMapsFormComponent;
  let fixture: ComponentFixture<AddMapsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMapsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMapsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
