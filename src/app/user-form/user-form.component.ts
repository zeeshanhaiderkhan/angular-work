import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators, FormArray } from '@angular/forms';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],

})
export class UserFormComponent implements OnInit {
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  
  
  skillForm = this.formBuilder.group({
    skill: new FormControl('', [Validators.required]),
    exp: new FormControl('', [ Validators.email]),
  });
  profileForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
    name: [null, Validators.required],
    skills:this.formBuilder.array([this.skillForm]),
  });
  constructor(private formBuilder : FormBuilder, private logger:LoggerService) { 

  }

  ngOnInit(): void {
    
  }

  skills():FormArray{
    return this.profileForm.controls['skills'] as FormArray;
  }
  newSkill():FormGroup{
    return this.formBuilder.group({
      skill:"",
      exp:"",
    })
  }
  addSkills(){
    this.skills().push(this.newSkill());
    this.logger.printMsg("new Skill Added!");
  }

  add(){
    if (!this.profileForm.valid) {
      return;
    }
    console.log(this.profileForm.value);
    console.log(this.profileForm.value);
  }
  

}
