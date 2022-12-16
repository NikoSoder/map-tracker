import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-maps-form',
  templateUrl: './add-maps-form.component.html',
  styleUrls: ['./add-maps-form.component.css'],
})
export class AddMapsFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  userForm = new FormGroup({
    mapName: new FormControl('', Validators.required),
    mapStyle: new FormControl('', Validators.required),
    mapTier: new FormControl('', Validators.required),
    mapNotes: new FormControl(''),
    mapCompleted: new FormControl(false, Validators.required),
  });

  userSubmit() {
    console.log(this.userForm.value);

    // this.dataService.createData(this.userForm.value).subscribe((res) => {
    //   console.log(res);
    // });

    this.userForm.reset();
  }
}
