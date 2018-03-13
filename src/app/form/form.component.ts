import { Component, OnInit } from '@angular/core';

import { Address } from '../address';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  address = new Address();
  
    constructor() { }
  
    ngOnInit() {
    }
  
    onSubmit() {
      alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
    }
  

}
