import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form-test',
  templateUrl: './user-form-test.component.html',
  styleUrls: ['./user-form-test.component.css']
})
export class UserFormTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  // get username() {
  //   return thi
  // }

  submitUserForm(form) {
    console.log(form);
    // alert აუცილებელია შეიყვანო 6 character, შენ შეყვანილი გაქვს x (რამდენიც აქვს შეყვანილი)
    //challenge იქნება რო p tag-ში ჩავწეროთ იგივე რაღაც
  }

}
