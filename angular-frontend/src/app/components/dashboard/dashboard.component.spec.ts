import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from '../table/table.component';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Map } from 'src/app/types/map.interface';
import { ApiService } from 'src/app/api.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DashboardComponent, TableComponent],
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set userMaps property to the maps returned by apiService.getAllMaps()', () => {
    const mockMaps: Map[] = [
      {
        id: 1,
        map_name: 'Map 1',
        map_type: 'linear',
        map_tier: 1,
        map_notes: '1',
        map_completed: true,
      },
      {
        id: 2,
        map_name: 'Map 2',
        map_type: 'linear',
        map_tier: 2,
        map_notes: '2',
        map_completed: false,
      },
    ];

    spyOn(apiService, 'getAllMaps').and.returnValue(of(mockMaps));
    component.ngOnInit();
    expect(component.userMaps).toEqual(mockMaps);
  });
});
