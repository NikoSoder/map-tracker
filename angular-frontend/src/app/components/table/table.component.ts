import { Component, OnInit, Input } from '@angular/core';
import { Map } from 'src/app/types/map.interface';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data!: Map[];
  searchInput = '';
  faSearch = faSearch;
  constructor() {}

  ngOnInit(): void {}

  onSearch(input: string) {
    this.searchInput = input;
  }
}
