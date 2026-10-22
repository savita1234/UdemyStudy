import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  calculateSalary(basic:number,bonus:number){
    return basic + bonus
  }
  
}
