import { Component, OnInit, Input } from '@angular/core';
import { Map } from 'src/app/types/map.interface';
import {
  faSearch,
  faSort,
  faPlus,
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { faMixer } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  errormsg = '';
  successmsg = '';
  showModal = false;
  faMixer = faMixer;
  faExclamationTriangle = faExclamationTriangle;
  faCheck = faCheck;
  sortField = 'name';
  sortOrder = 'asc';
  searchInput = '';
  faSearch = faSearch;
  faSort = faSort;
  faPlus = faPlus;
  @Input() maps!: Map[];
  constructor(private apiService: ApiService) {}

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

  toggleFormModal() {
    this.successmsg = '';
    this.errormsg = '';
    this.showModal = !this.showModal;
  }

  public mapForm = new FormGroup({
    map_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    map_type: new FormControl('linear', Validators.required),
    map_tier: new FormControl('', [Validators.required, Validators.max(8)]),
    map_notes: new FormControl('', Validators.maxLength(20)),
    map_completed: new FormControl(false),
  });

  onSubmit() {
    this.successmsg = '';
    this.errormsg = '';
    const form = this.mapForm.value;

    /* check if map is already added */
    const isMapAlreadyAdded: boolean = this.maps.some(
      (obj) => obj.map_name === form.map_name
    );

    if (isMapAlreadyAdded) {
      this.errormsg = 'Map is already added';
      return;
    }

    this.apiService.createMap(form).subscribe((res) => {
      console.log(res);
      this.maps.push(res);

      this.successmsg = 'Map added';
      this.mapForm.reset({
        map_name: '',
        map_type: 'linear',
        map_tier: '',
        map_notes: '',
        map_completed: false,
      });
    });
  }
}
