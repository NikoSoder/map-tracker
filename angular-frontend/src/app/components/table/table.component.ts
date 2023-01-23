import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Map } from 'src/app/types/map.interface';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Output() onDelete = new EventEmitter<Map>();
  @Input() map = {} as Map;
  @Input() data!: Map[];
  @ContentChild('tableMethods') tableMethods!: TemplateRef<any>;
  searchInput = '';
  faSearch = faSearch;
  constructor() {}

  ngOnInit(): void {}

  onSearch(input: string) {
    this.searchInput = input;
  }
}
