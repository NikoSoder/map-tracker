import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Map } from 'src/app/types/map.interface';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allMaps: Map[] = [];
  completedMaps: Map[] = [];
  projectMaps: Map[] = [];
  deletedMap = {} as Map;

  faTrash = faTrash;
  faCheckCircle = faCheckCircle;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllMaps().subscribe((maps: Map[]) => {
      console.log('All user maps', maps);
      this.allMaps = maps;
      this.completedMaps = maps.filter((map) => map.map_completed === 1);
      this.projectMaps = maps.filter((map) => map.map_completed === 0);
    });
  }

  onDelete(userMap: Map) {
    this.apiService.deleteMap(userMap.map_name).subscribe(() => {
      this.completedMaps = this.completedMaps.filter(
        (map) => map.map_name !== userMap.map_name
      );

      this.projectMaps = this.projectMaps.filter(
        (map) => map.map_name !== userMap.map_name
      );
    });
  }

  sendMapToModal(userMap: Map) {
    this.deletedMap = userMap;
  }

  onCompleted(userMap: Map) {
    this.apiService.updateProject(userMap, userMap.map_name).subscribe(() => {
      const index = this.projectMaps.findIndex(
        (map) => map.map_name === userMap.map_name
      );
      if (index !== -1) {
        const completedProject = this.projectMaps.splice(index, 1)[0];
        completedProject.map_completed = 1;
        this.completedMaps = this.completedMaps.concat(completedProject);
      }
    });
  }
}
