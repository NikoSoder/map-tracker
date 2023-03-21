import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Map } from './types/map.interface';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all maps', () => {
    const mockMaps: Map[] = [
      {
        map_name: 'Map 1',
        map_type: 'linear',
        map_tier: 1,
        map_notes: '',
        map_completed: true,
      },
    ];
    service.getAllMaps().subscribe((maps) => {
      expect(maps.length).toBe(1);
      expect(maps).toEqual(mockMaps);
    });

    const req = httpMock.expectOne(service.API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockMaps);
  });

  it('should return an Observable<Map>', () => {
    const id = 1;
    const dummyMap: Map = {
      map_name: 'Map 1',
      map_type: 'linear',
      map_tier: 1,
      map_notes: '',
      map_completed: true,
    };

    service.getMap(id).subscribe((map) => {
      expect(map).toEqual(dummyMap);
    });

    const req = httpMock.expectOne(`${service.API_URL}${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMap);
  });

  it('should return an Observable<Map>', () => {
    const data: Map = {
      map_name: 'Map 1',
      map_type: 'linear',
      map_tier: 1,
      map_notes: '',
      map_completed: true,
    };
    const dummyMap: Map = {
      map_name: 'Map 1',
      map_type: 'linear',
      map_tier: 1,
      map_notes: '',
      map_completed: true,
    };

    service.createMap(data).subscribe((map) => {
      expect(map).toEqual(dummyMap);
    });

    const req = httpMock.expectOne(service.API_URL);
    expect(req.request.method).toBe('POST');
    req.flush(dummyMap);
  });

  it('should return an empty Observable', () => {
    const name = 'Map 1';

    service.deleteMap(name).subscribe((res) => {
      expect(res).toEqual({});
    });

    const req = httpMock.expectOne(`${service.API_URL}${name}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  describe('updateMap', () => {
    it('should return an empty Observable', () => {
      const name = 'Map 1';
      const map: Map = {
        map_name: 'Map 1',
        map_type: 'linear',
        map_tier: 1,
        map_notes: '',
        map_completed: true,
      };

      service.updateMap(map, name).subscribe((res) => {
        expect(res).toEqual({});
      });

      const req = httpMock.expectOne(`${service.API_URL}${name}`);
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(map);
      req.flush({});
    });
  });
});
