import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ObservableService } from '../services/observable-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() message = ""
  Users : any[] = []
  @Output() message1 = new EventEmitter()
  sendMessage(){
    this.message1.emit("send from child")
  }
  constructor(private observice: ObservableService){}
  ngOnInit(): void{
    this.observice.getUsers().subscribe({
      next: (data) =>
      {
         this.Users = data
          console.log(this.Users)
      }
    })

  }

}
