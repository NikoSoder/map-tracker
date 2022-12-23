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
  completedMaps: Map[] = [];
  projectMaps: Map[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllMaps().subscribe((maps: Map[]) => {
      console.log('All user maps', maps);
      this.userMaps = maps;
      this.completedMaps = maps.filter((map) => map.map_completed === 1);
      this.projectMaps = maps.filter((map) => map.map_completed === 0);
    });
  }

  onDelete(mapName: string, isMapCompleted: number | boolean) {
    this.apiService.deleteMap(mapName).subscribe(() => {
      if (isMapCompleted === 1) {
        this.completedMaps = this.completedMaps.filter(
          (map) => map.map_name !== mapName
        );
        return;
      }
      this.projectMaps = this.projectMaps.filter(
        (map) => map.map_name !== mapName
      );
    });
  }

  onCompleted(map: Map, mapName: string) {
    this.apiService.updateProject(map, mapName).subscribe();

    for (let i = 0; i < this.projectMaps.length; i++) {
      if (this.projectMaps[i].map_name === mapName) {
        const completedProject = this.projectMaps.splice(i, 1);
        completedProject[0].map_completed = 1;
        this.completedMaps.push(completedProject[0]);
        break;
      }
    }
  }
}
