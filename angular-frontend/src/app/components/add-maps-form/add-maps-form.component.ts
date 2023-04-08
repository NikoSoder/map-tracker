import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Map } from 'src/app/types/map.interface';
import {
  faCheck,
  faExclamationTriangle,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-maps-form',
  templateUrl: './add-maps-form.component.html',
  styleUrls: ['./add-maps-form.component.css'],
})
export class AddMapsFormComponent implements OnInit {
  faExclamationTriangle = faExclamationTriangle;
  faCheck = faCheck;
  faArrowLeft = faArrowLeft;
  errormsg = '';
  successmsg = '';
  constructor(private apiService: ApiService, private location: Location) {}

  ngOnInit(): void {}

  mapForm = new FormGroup({
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
    if (!this.mapForm.value.map_name) {
      return;
    }
    this.successmsg = '';
    this.errormsg = '';
    const form = this.mapForm.value;
    this.apiService.getAllMaps().subscribe((maps: Map[]) => {
      maps = maps.filter((map) => map.map_name === form.map_name);

      if (maps.length) {
        this.errormsg = 'Map is already added';
        return;
      }
      this.apiService.createMap(form).subscribe((res) => {
        console.log(res);
        this.successmsg = 'Map added';
      });
    });

    this.mapForm.reset({
      map_name: '',
      map_type: 'linear',
      map_tier: '',
      map_notes: '',
      map_completed: false,
    });
  }

  goBack() {
    this.location.back();
  }
}
