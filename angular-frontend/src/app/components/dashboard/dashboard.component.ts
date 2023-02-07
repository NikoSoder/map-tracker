import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Map } from 'src/app/types/map.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userMaps: Map[] = [];
  completedMaps: Map[] = [];
  projectMaps: Map[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllMaps().subscribe((maps: Map[]) => {
      this.userMaps = maps;
      this.completedMaps = maps.filter((map) => map.map_completed === 1);
      this.projectMaps = maps.filter((map) => map.map_completed === 0);
    });
  }
}
