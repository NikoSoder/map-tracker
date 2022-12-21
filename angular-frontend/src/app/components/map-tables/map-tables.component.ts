import { Component, OnInit } from '@angular/core';
import { Map } from 'src/app/types/map.interface';
import { ApiService } from 'src/app/api.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-tables',
  templateUrl: './map-tables.component.html',
  styleUrls: ['./map-tables.component.css'],
})
export class MapTablesComponent implements OnInit {
  faTrash = faTrash;
  faCheckCircle = faCheckCircle;
  userMaps: Map[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllMaps().subscribe((maps: Map[]) => {
      console.log('All user maps', maps);
      this.userMaps = maps;
    });
  }

  onDelete(mapName: string) {
    console.log(mapName);
  }

  onCompleted(mapName: string) {
    console.log('completed');
  }
}
