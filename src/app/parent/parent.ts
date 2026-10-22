import { Component } from '@angular/core';
import { Child } from '../child/child';
import { SalaryService } from '../services/salary-service';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  parentMessage = "hello world"
 receivedMessage: string = '';
 finalSalary = 0
 basic = 25000
 bonus = 15000
  receiveMessage(message1: string) {
    this.receivedMessage = message1;
  }
  constructor(private salaryService: SalaryService){
    this.finalSalary = this.salaryService.calculateSalary(this.basic,this.bonus)

    
  }
}
