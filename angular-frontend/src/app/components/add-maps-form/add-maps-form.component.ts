import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Map } from 'src/app/types/map.interface';

@Component({
  selector: 'app-add-maps-form',
  templateUrl: './add-maps-form.component.html',
  styleUrls: ['./add-maps-form.component.css'],
})
export class AddMapsFormComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  mapForm = new FormGroup({
    map_name: new FormControl('', Validators.required),
    map_type: new FormControl('linear', Validators.required),
    map_tier: new FormControl('', Validators.required),
    map_notes: new FormControl(''),
    map_completed: new FormControl(false),
  });

  userSubmit() {
    console.log(this.mapForm.value);
    this.apiService.createMap(this.mapForm.value).subscribe((res) => {
      console.log(res);
    });

    this.mapForm.reset({
      map_name: '',
      map_type: 'linear',
      map_tier: '',
      map_notes: '',
      map_completed: false,
    });
  }
}
