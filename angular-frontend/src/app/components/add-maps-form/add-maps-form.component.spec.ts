import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMapsFormComponent } from './add-maps-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddMapsFormComponent', () => {
  let component: AddMapsFormComponent;
  let fixture: ComponentFixture<AddMapsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [AddMapsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMapsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
