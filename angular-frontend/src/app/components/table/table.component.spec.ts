import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule, HttpClientTestingModule],
      declarations: [TableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
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
});
