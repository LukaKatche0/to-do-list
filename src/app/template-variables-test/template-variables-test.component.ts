import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variables-test',
  templateUrl: './template-variables-test.component.html',
  styleUrls: ['./template-variables-test.component.css']
})
export class TemplateVariablesTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logValue(value: string) {
    console.log(value);
  }

}
