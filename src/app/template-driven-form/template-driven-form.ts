import { Component } from '@angular/core';
import { FormsModule, NgControlStatusGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm {
  name = "savita"
  submitForm(form: NgForm){
    console.log(form.value)
  }

}
