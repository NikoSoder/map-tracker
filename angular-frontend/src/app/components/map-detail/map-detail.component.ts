import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/api.service';
import { Map } from 'src/app/types/map.interface';
import {
  faAngleLeft,
  faTrash,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css'],
})
export class MapDetailComponent implements OnInit {
  faTrash = faTrash;
  faAngleLeft = faAngleLeft;
  faCheckCircle = faCheckCircle;
  map?: Map;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMap();
  }

  getMap() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getMap(id).subscribe((userMap) => {
      this.map = userMap.result[0];
    });
  }

  onDelete(userMap: Map) {
    this.apiService.deleteMap(userMap.map_name).subscribe(() => {
      this.goBack();
    });
  }

  onCompleted(userMap: Map) {
    userMap.map_completed = 1;
    this.apiService.updateMap(userMap, userMap.map_name).subscribe(() => {
      this.goBack();
    });
  }

  updateNotes(userMap: Map, notes: string) {
    userMap.map_notes = notes;
    this.apiService.updateMap(userMap, userMap.map_name).subscribe(() => {
      this.goBack();
    });
  }

  goBack() {
    this.location.back();
  }
}
