import {Component} from 'angular2/core';

@Component({
  selector: 'contact',
  styles: [`
    .ng-valid[required] { border: 2px solid #42A948; /* green */ }
    .ng-invalid { border: 2px solid #a94442; /* red */ }
    .alert { color: #a94442; /* red */ }
  `],
  // #f="ngForm" assigns the form object to a local variable f. 
  template: `
    <h1>Contact</h1>
    <form #f="ngForm" (ngSubmit)="onSubmit(f.form.value)">

      <label>Email:</label>
      <input type="email" [(ngModel)]="model.email" ngControl="email" #email="ngForm" required>

      <div [hidden]="email.valid" class="alert alert-danger">Email is required</div>

      <p><button type="submit" [disabled]="!f.form.valid">Submit</button></p>
    </form>`
})
export class Contact {
  model = {};

  onSubmit(value) {
    console.log(`Submitted: ${JSON.stringify(value)}`);
    // clear form after submit with two-way binding
    this.model = {};
  }

}
