import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { of } from 'rxjs';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [TableComponent],
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change searchInput', () => {
    component.onSearch('test');
    expect(component.searchInput).toBe('test');
  });

  it('should change searchInput again', () => {
    component.onSearch('second test');
    expect(component.searchInput).toBe('second test');
  });

  it('should reset messages and change showModal', () => {
    component.errormsg = 'Error';
    expect(component.errormsg).toBe('Error');

    component.successmsg = 'Success';
    component.toggleFormModal();
    fixture.detectChanges();

    expect(component.errormsg).toBe('');
    expect(component.successmsg).toBe('');
    expect(component.showModal).toBe(true);

    component.toggleFormModal();
    expect(component.showModal).toBe(false);
  });

  it('should be invalid', () => {
    component.mapForm.setValue({
      map_name: '',
      map_type: 'linear',
      map_tier: '2',
      map_notes: '',
      map_completed: true,
    });

    expect(component.mapForm.valid).toEqual(false);
  });

  it('should be valid', () => {
    component.mapForm.setValue({
      map_name: 'testi',
      map_type: 'linear',
      map_tier: '2',
      map_notes: '',
      map_completed: false,
    });

    expect(component.mapForm.valid).toEqual(true);
  });

  it('should add map successfully', () => {
    spyOn(apiService, 'createMap').and.returnValue(
      of({
        id: 1,
        map_name: 'Map 1',
        map_type: 'linear',
        map_tier: 1,
        map_notes: '1',
        map_completed: true,
      })
    );

    component.mapForm.setValue({
      map_name: 'Map 1',
      map_type: 'linear',
      map_tier: '1',
      map_notes: '',
      map_completed: true,
    });
    component.onSubmit();
    expect(component.successmsg).toBe('Map added');
    expect(component.errormsg).toBe('');
    expect(component.maps.length).toBe(1);
  });

  it('should show error message if map already exists', () => {
    spyOn(apiService, 'createMap').and.returnValue(of());
    component.mapForm.setValue({
      map_name: 'Map 1',
      map_type: 'linear',
      map_tier: '1',
      map_notes: '',
      map_completed: false,
    });
    component.maps = [
      {
        id: 1,
        map_name: 'Map 1',
        map_type: 'linear',
        map_tier: 1,
        map_notes: '1',
        map_completed: true,
      },
    ];
    component.onSubmit();
    expect(component.successmsg).toBe('');
    expect(component.errormsg).toBe('Map is already added');
    expect(component.maps.length).toBe(1);
  });

  it('should return from onSubmit() if map_name is empty', () => {
    spyOn(apiService, 'createMap').and.returnValue(of());
    component.mapForm.setValue({
      map_name: '',
      map_type: 'linear',
      map_tier: '1',
      map_notes: '',
      map_completed: false,
    });
    const initialMapsLength = component.maps.length;
    component.onSubmit();
    expect(component.successmsg).toBe('');
    expect(component.errormsg).toBe('');
    expect(component.maps.length).toBe(initialMapsLength);
  });
});
