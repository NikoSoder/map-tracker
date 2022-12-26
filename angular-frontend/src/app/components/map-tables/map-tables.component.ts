import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Map } from 'src/app/types/map.interface';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-map-tables',
  templateUrl: './map-tables.component.html',
  styleUrls: ['./map-tables.component.css'],
})
export class MapTablesComponent implements OnInit {
  @Input() completedMaps: Map[] = [];
  @Input() projectMaps: Map[] = [];
  @Input() userMaps: Map[] = [];
  @Output() onDelete = new EventEmitter<Map>();
  @Output() onCompleted = new EventEmitter<Map>();

  faTrash = faTrash;
  faCheckCircle = faCheckCircle;

  constructor() {}

  ngOnInit(): void {}
}
