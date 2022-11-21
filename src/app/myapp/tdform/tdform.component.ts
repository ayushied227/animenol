import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  constructor() { }
  signin=new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  })
  loginuser(): void{
    console.log(this.signin.value)
  }

  ngOnInit(): void {
  }

}
