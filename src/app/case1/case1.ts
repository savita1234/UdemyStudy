import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObservableService } from '../services/observable-service';
@Component({
  selector: 'app-case1',
  imports: [FormsModule, CommonModule],
  templateUrl: './case1.html',
  styleUrl: './case1.css',
})
export class Case1 {
  name = 'savita gawas';
  username: string = "savita"
  surname = "gawas"
  data = {"age": 27, "gender":"female"}
  url = "https://angular.io/assets/images/logos/angular/angular.png"
  age: number  = 20
  grocery = ["butter","milk","bread"]
  isSuccess = "success"
  selectedTech = "Php"
  numberValue = 1234.654
  currencyValue = 1000
  items: number[]  = []
  onclick(){
    alert("hello.Thank you..")
  }
  constructor(private service: ObservableService){
    this.service.getNumber().subscribe({
      next: (data) =>{
        this.items.push(data);
      }
    });
  }

}
