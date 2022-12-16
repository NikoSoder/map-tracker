import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-tables',
  templateUrl: './map-tables.component.html',
  styleUrls: ['./map-tables.component.css'],
})
export class MapTablesComponent implements OnInit {
  // This is just for testing
  // Delete later
  testData = [
    {
      mapName: 'surf_something',
      mapStyle: 'Linear',
      mapTier: 2,
      mapNotes: 'Map was really good',
    },
    {
      mapName: 'surf_somethingelse',
      mapStyle: 'Stage',
      mapTier: 3,
      mapNotes: 'This was hard',
    },
    {
      mapName: 'surf_something',
      mapStyle: 'Linear',
      mapTier: 2,
      mapNotes: 'Map was really good',
    },
    {
      mapName: 'surf_somethingelse',
      mapStyle: 'Stage',
      mapTier: 3,
      mapNotes: 'This was hard',
    },
    {
      mapName: 'surf_something',
      mapStyle: 'Linear',
      mapTier: 2,
      mapNotes: 'Map was really good',
    },
    {
      mapName: 'surf_somethingelse',
      mapStyle: 'Stage',
      mapTier: 3,
      mapNotes: 'This was hard',
    },
    {
      mapName: 'surf_something',
      mapStyle: 'Linear',
      mapTier: 2,
      mapNotes: 'Map was really good',
    },
    {
      mapName: 'surf_somethingelse',
      mapStyle: 'Stage',
      mapTier: 3,
      mapNotes: 'This was hard',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
