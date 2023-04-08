import { Component, OnInit, Input } from '@angular/core';
import { Map } from 'src/app/types/map.interface';
import { faSearch, faSort, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  sortField = 'name';
  sortOrder = 'asc';
  searchInput = '';
  faSearch = faSearch;
  faSort = faSort;
  faPlus = faPlus;
  @Input() maps: Map[];

  constructor() {
    this.maps = [];
  }

  ngOnInit(): void {}

  sort(field: string) {
    this.sortField = field;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';

    this.maps.sort((a, b) => {
      if (field === 'map_name') {
        return this.sortOrder === 'asc'
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      } else if (field === 'map_tier') {
        return this.sortOrder === 'asc'
          ? a[field] - b[field]
          : b[field] - a[field];
      } else if (field === 'map_completed') {
        return this.sortOrder === 'asc'
          ? Number(a[field]) - Number(b[field])
          : Number(b[field]) - Number(a[field]);
      } else if (field === 'map_type') {
        return this.sortOrder === 'asc'
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      } else {
        return 0;
      }
    });
  }

  onSearch(input: string) {
    this.searchInput = input;
  }
}
