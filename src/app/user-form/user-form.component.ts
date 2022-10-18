import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  profileForm=new FormGroup({
    firstName: new FormControl(''),
    lastname: new FormControl('')
  });
  constructor() { 

  }

  ngOnInit(): void {
  }

}
