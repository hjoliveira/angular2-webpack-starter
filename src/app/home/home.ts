import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Title} from './services/title';
import {XLarge} from './directives/x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES,
    XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ `span { color: red }` ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `<div>
    <span x-large>Hello</span>
    <input type="text" [value]="data.value" (input)="data.value = $event.target.value" autofocus>
    <!--
      Rather than wiring up two-way data-binding ourselves
      we can use Angular's [(ngModel)] syntax
      <input type="text" [(ngModel)]="title.value">
    -->

    <pre>this.data = {{ data | json }}</pre>
    <p>{{ date | date:'medium' }}</p>
  </div>
`
})
export class Home {
  // Set our default values
  date: Date

  data = { value: '' };
  // TypeScript public modifiers
  constructor(public title: Title) {
    setInterval(() => this.date = new Date(), 1000);
  }

  ngOnChanges(changes) {
    console.log('changes:' + changes);
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
