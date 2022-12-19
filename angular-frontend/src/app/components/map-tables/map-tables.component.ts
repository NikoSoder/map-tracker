import { Component, OnInit } from '@angular/core';
import { Map } from 'src/app/types/map.interface';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-map-tables',
  templateUrl: './map-tables.component.html',
  styleUrls: ['./map-tables.component.css'],
})
export class MapTablesComponent implements OnInit {
  userMaps: Map[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllMaps().subscribe((maps: Map[]) => {
      console.log('All user maps', maps);
      this.userMaps = maps;
    });
  }
}
