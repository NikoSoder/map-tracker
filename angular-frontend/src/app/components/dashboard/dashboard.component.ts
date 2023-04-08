import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Map } from 'src/app/types/map.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allMaps: Map[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllMaps().subscribe((maps: Map[]) => {
      this.allMaps = maps;
    });
  }
}
