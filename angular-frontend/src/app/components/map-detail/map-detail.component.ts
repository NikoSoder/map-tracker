import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/api.service';
import { Map } from 'src/app/types/map.interface';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css'],
})
export class MapDetailComponent implements OnInit {
  map?: Map;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMap();
  }

  getMap(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getMap(id).subscribe((userMap) => {
      this.map = userMap.result[0];
    });
  }
}
