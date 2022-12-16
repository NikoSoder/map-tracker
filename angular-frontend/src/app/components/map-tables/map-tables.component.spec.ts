import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTablesComponent } from './map-tables.component';

describe('MapTablesComponent', () => {
  let component: MapTablesComponent;
  let fixture: ComponentFixture<MapTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
