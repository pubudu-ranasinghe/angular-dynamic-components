import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-component',
  template: `<p>Override me!</p>`
})
export class BaseComponentComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
