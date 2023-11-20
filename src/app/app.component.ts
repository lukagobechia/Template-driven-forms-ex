import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-Driven-Forms-ex';
  fullname = '';
  email = '';

  @ViewChild('regform') form: NgForm;

  onSubmit(){
    console.log(this.form);
    this.fullname = this.form.value.FullName;
    this.email = this.form.value.Email;
    this.form.reset();
  }
}
