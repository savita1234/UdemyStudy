import { Component } from '@angular/core';

@Component({
  selector: 'app-case1',
  imports: [],
  templateUrl: './case1.html',
  styleUrl: './case1.css',
})
export class Case1 {
  name = 'Savita';
  surname = "gawas"
  data = {"age": 27, "gender":"female"}
  url = "https://angular.io/assets/images/logos/angular/angular.png"

  onclick(){
    alert("hello.Thank you..")
  }

}
