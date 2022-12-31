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
      if (userMap.map_completed === 1) {
        this.completedMaps = this.completedMaps.filter(
          (map) => map.map_name !== userMap.map_name
        );
        return;
      }
      this.projectMaps = this.projectMaps.filter(
        (map) => map.map_name !== userMap.map_name
      );
    });
  }

  onCompleted(userMap: Map) {
    this.apiService.updateProject(userMap, userMap.map_name).subscribe(() => {
      for (let i = 0; i < this.projectMaps.length; i++) {
        if (this.projectMaps[i].map_name === userMap.map_name) {
          const completedProject = this.projectMaps.splice(i, 1);
          completedProject[0].map_completed = 1;
          this.completedMaps.push(completedProject[0]);
          break;
        }
      }
    });
  }
}
